<template>
  <div>
    <section class="header-breadcrumb bgimage overlay overlay--dark">
      <div class="bg_image_holder">
        <img src="@/assets/img/breadcrumb1.jpg" alt />
      </div>
      <div class="breadcrumb-wrapper content_above">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 class="page-title">Welcome to Wellness-Connect</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li
                    class="breadcrumb-item active"
                    aria-current="page"
                  >Please complete profile details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="add-listing-wrapper border-bottom section-bg section-padding-strict">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="atbd_content_module">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-user"></span>General Information
                  </h4>
                </div>
              </div>
              <div class="atbdb_content_module_contents">
                <form action="/">
                  <div class="form-group">
                    <label for="title" class="form-label">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="Enter email"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="form-group row atbd_row_bg">
                    <div class="col-sm-6">
                      <label for="bdbh_saturday" class="form-label">First Name</label>
                      <input
                        type="text"
                        id="bdbh_saturday"
                        v-model="firstName"
                        class="form-control directory_field"
                      />
                    </div>
                    <div class="col-sm-6 mt-3 mt-sm-0">
                      <label for="bdbh_saturday_cls" class="form-label">Last Name</label>
                      <input
                        type="text"
                        id="bdbh_saturday_cls"
                        v-model="lastName"
                        class="form-control directory_field"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="custom-field" class="form-label">Select Gender</label>
                    <div class="select-basic">
                      <select class="form-control" id="custom-field" v-model="gender">
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Select Role</label>
                    <div class="atbdp-radio-list">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="customRadioOne"
                          name="customRadioInline1"
                          class="custom-control-input"
                          value="0"
                          v-model="role"
                        />
                        <label class="custom-control-label" for="customRadioOne">Client</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="customRadioTwo"
                          name="customRadioInline1"
                          class="custom-control-input"
                          value="1"
                          v-model="role"
                        />
                        <label class="custom-control-label" for="customRadioTwo">Professional</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- ends: .atbdb_content_module_contents -->
            </div>
            <!-- ends: .atbd_content_module -->
          </div>
          <!-- ends: .col-lg-10 -->
          <div class="col-lg-10 offset-lg-1 text-center">
            <div
              class="atbd_term_and_condition_area custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                name="listing_t"
                value="1"
                id="listing_t"
                v-model="agreeTerm"
              />
              <label for="listing_t" class="not_empty custom-control-label">
                I Agree with all
                <a href id="listing_t_c">Terms & Conditions</a>
              </label>
            </div>
            <div class="btn_wrap list_submit m-top-25">
              <button
                type="submit"
                class="btn btn-primary btn-lg listing_submit_btn"
                :disabled="validateSubmit"
                @click.prevent="submitUser"
              >Submit</button>
            </div>
          </div>
          <!-- ends: .col-lg-10 -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
require("select2/dist/js/select2.full.js");
import { API_URL } from "@/config";
export default {
  mounted() {
    this.initJQuery();
    if (this.user.displayName != null && this.user.displayName != "") {
      this.firstName = this.user.displayName.split(" ")[0];
      this.lastName = this.user.displayName.split(" ")[1];
    }
    this.email = this.user.email;
  },
  methods: {
    initJQuery() {
      $(".bg_image_holder").each(function() {
        var $this = $(this);
        var imgLink = $this.children().attr("src");
        $this
          .css({
            "background-image": "url(" + imgLink + ")",
            opacity: "1"
          })
          .children()
          .attr("alt", imgLink);
      });

      $(".ad_search_category").select2({
        placeholder: "Select Category",
        width: "100%",
        containerCssClass: "form-control"
      });
    },
    async submitUser() {
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        role: this.role
      };
      this.$vs.loading();
      const newUser = await axios.post(API_URL + "auth/signup", {
        id: this.user.id,
        user: user
      });

      this.$store.commit("updateUserData", newUser.data);
      localStorage.setItem("user", JSON.stringify(newUser.data));
      this.$vs.loading.close();

      this.$router.push("/");
    }
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    validateSubmit() {
      return (
        this.email.length == 0 ||
        this.firstName.length == 0 ||
        this.lastName.length == 0 ||
        this.agreeTerm == 0
      );
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      role: 0,
      gender: 0,
      agreeTerm: 0
    };
  }
};
</script>

<style lang="scss" scoped>
</style>