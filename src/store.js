import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//Function to get cookie by name
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    myorders: [],
    requests: [],
    service: "http://localhost:8010",
    user: {
      username: ""
    },
    login: false,
    loginerr: false,
    snackbar: {
      status: false,
      message: "",
      color: ""
    }
  },
  mutations: {
    listOrders(state, data) {
      this.state.orders = data;
    },
    loginerr() {
      this.state.loginerr = !this.state.loginerr;
    },
    login(state, payload) {
      this.state.login = true;
      this.state.user.username = payload;
    },
    requestErr(state, payload) {
      console.log(payload.status, payload.msg, payload.color);
      this.state.snackbar.status = payload.status;
      this.state.snackbar.message = payload.msg;
      this.state.snackbar.color = payload.color;
    },
    saveMyOrders(state, payload) {
      this.state.myorders = payload;
    },
    saveRequests(state, payload) {
      var requests = [payload.oid, payload.data]
      this.state.requests.push(requests);
    }
  },
  actions: {
    getOrders(context) {
      return new axios.get(this.state.service + "/orders")
        .then(res => {
          if (res.status == 200) {
            context.commit("listOrders", res.data);
          }
        })
        .catch(err => console.log(err));
    },
    login(context, payload) {
      return new axios.post(
        this.state.service + "/login",
        {},
        {
          auth: payload
        }
      )
        .then(res => {
          if (res.status == 200) {
            let token =
              "Basic " + btoa(payload.username + ":" + payload.password);
            document.cookie = "token=" + token + ";" + "max-age=7200";
            window.location = "/";
          }
        })
        .catch(err => {
          context.commit("loginerr");
          console.error(err);
        });
    },
    clearCookie() {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location = "/login";
    },
    sendRequest(context, payload) {
      return new axios.post(
        this.state.service + "/request/" + payload.order_id,
        payload
      )
        .then(() => {
          var snackbar = {
            status: true,
            msg: "Your request was sent successfully!",
            color: "success"
          };
          context.commit("requestErr", snackbar);
        })
        .catch(() => {
          var snackbar = {
            status: true,
            msg: "Something went wrong. Please try again",
            color: "error"
          };
          context.commit("requestErr", snackbar);
        });
    },
    getMyOrders(context) {
      return new axios.get(this.state.service + "/user/order", {
        headers: {
          Authorization: getCookie("token")
        }
      })
        .then(res => {
          context.commit("saveMyOrders", res.data);
        })
        .catch(err => console.error(err));
    },
    getRequests(context, oid) {
      return new axios.get(this.state.service + "/requests/" + oid, {
        headers: {
          Authorization: getCookie("token")
        }
      })
        .then(res => {
          var request = {
            oid: oid,
            data: res.data
          }
          context.commit("saveRequests", request);
        })
        .catch(err => console.error(err));
    }
  },
  modules: {},
  getters: {
    getterOrders(state) {
      return state.orders;
    },
    checkCookie() {
      var token = getCookie("token");
      if (token != "") return true;

      return false;
    }
  }
});
