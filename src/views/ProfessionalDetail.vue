<template>
  <div>
    <section class="author-info-area section-padding-strict section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="atbd_auhor_profile_area">
              <div class="atbd_author_avatar">
                <img src="@/assets/img/author-profile.jpg" alt="Author Image" />
                <div class="atbd_auth_nd">
                  <h2>Kenneth Frazier</h2>
                  <p>Doctor</p>
                </div>
              </div>
              <!-- ends: .atbd_author_avatar -->
              <div class="atbd_author_meta">
                <div class="atbd_listing_meta">
                  <span class="atbd_meta atbd_listing_rating">
                    4.5
                    <i class="la la-star"></i>
                  </span>
                  <p class="meta-info">
                    <span>22</span>Reviews
                  </p>
                </div>
              </div>
              <!-- ends: .atbd_author_meta -->
            </div>
            <!-- ends: .atbd_auhor_profile_area -->
          </div>
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-8 col-md-7 m-bottom-30">
            <div class="atbd_content_module">
              <div class="atbd_content_module">
                <div class="atbd_content_module__tittle_area">
                  <div class="atbd_area_title">
                    <h4>
                      <span class="la la-user"></span>About Professional
                    </h4>
                  </div>
                </div>
                <div class="atbdb_content_module_contents">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Nemo ucxqui officia voluptatem accusantium doloremque laudan tium, totam rem ape dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                    <br />
                    <br />Nemo enim ipsam voluptatem quia voluptas cupidatat non proident, sunt culpa qui officia dese runt mollit anim id est laborum. Sedu perspi sunt explicabo. Nemo ucxqui officia voluptatem hscia unde omnis proident.
                  </p>
                </div>
              </div>
            </div>
            <!-- ends: .atbd_author_module -->
            <div class="atbd_content_module atbd_listing_gallery">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-image"></span>Gallery
                  </h4>
                </div>
              </div>
              <div class="atbdb_content_module_contents">
                <div class="gallery-wrapper">
                  <slick :options="slickOptions" class="gallery-images">
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                    <div class="single-image">
                      <img src="@/assets/img/g1.jpg" alt />
                    </div>
                  </slick>
                  <!-- ends: .gallery-images -->
                  <slick :options="slickThumbOptions" class="gallery-thumbs">
                    <div class="single-thumb">
                      <img src="@/assets/img/gt1.jpg" alt />
                    </div>
                    <div class="single-thumb">
                      <img src="@/assets/img/gt2.jpg" alt />
                    </div>
                    <div class="single-thumb">
                      <img src="@/assets/img/gt3.jpg" alt />
                    </div>
                    <div class="single-thumb">
                      <img src="@/assets/img/gt4.jpg" alt />
                    </div>
                    <div class="single-thumb">
                      <img src="@/assets/img/gt5.jpg" alt />
                    </div>
                    <div class="single-thumb">
                      <img src="@/assets/img/gt3.jpg" alt />
                    </div>
                  </slick>
                  <!-- ends: .gallery-thumbs -->
                </div>
                <!-- ends: .gallery-wrapper -->
              </div>
            </div>

            <div class="atbd_content_module">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-map-o"></span>Location
                  </h4>
                </div>
              </div>
              <div class="atbdb_content_module_contents">
                <gmap-map
                  style="height: 500px; width: 100%"
                  :zoom="15"
                  :center="{lat:48.2304504, lng:16.3560885}"
                >
                  <gmap-marker
                    :position="{lat:48.2304504, lng:16.3560885}"
                    :clickable="true"
                    @click="showMapInfo = true"
                    :icon="{url: require('@/assets/img/marker.png')}"
                  >
                    <gmap-info-window
                      @closeclick="showMapInfo=false"
                      :opened="showMapInfo"
                      :position="{lat:48.2304504, lng:16.3560885}"
                    >
                      <div class="atbd_single_listing">
                        <div class="atbd_listing_info">
                          <div class="atbd_content_upper">
                            <h4 class="atbd_listing_title">
                              <a href>Mr.James</a>
                            </h4>
                            <div class="atbd_listing_data_list">
                              <ul>
                                <li>
                                  <p>
                                    <span class="la la-map-marker"></span>Los Angeles, United States
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <span class="la la-phone"></span>(415) 796-3633
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </gmap-info-window>
                  </gmap-marker>
                </gmap-map>
              </div>
            </div>

            <div class="atbd_content_module atbd_faqs_module">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-question-circle"></span>Frequently Asked Questions
                  </h4>
                </div>
              </div>
              <div class="atbdb_content_module_contents">
                <div class="atbdp-accordion">
                  <div class="accordion-single selected">
                    <h3 class="faq-title">
                      <a href="#">Question number one</a>
                    </h3>
                    <p
                      class="ac-body"
                      style="display: block;"
                    >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high level of precision, full legal compliance</p>
                  </div>
                  <div class="accordion-single">
                    <h3 class="faq-title">
                      <a href="#">Question number two and others</a>
                    </h3>
                    <p
                      class="ac-body"
                      style="display: none;"
                    >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- ends: .atbd_content_module -->
            <div class="atbd_content_module atbd_review_module">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-star-o"></span>4 Reviews
                  </h4>
                  <label
                    for="review_content"
                    class="btn btn-secondary btn-icon-left btn-sm not_empty"
                  >
                    <span class="la la-star-o"></span> Add a review
                  </label>
                </div>
              </div>
              <div class="atbdb_content_module_contents">
                <div id="client_review_list">
                  <div class="atbd_single_review atbdp_static">
                    <div class="atbd_review_top">
                      <div class="atbd_avatar_wrapper">
                        <div class="atbd_review_avatar">
                          <img
                            alt
                            src="@/assets/img/review-author-thumb.jpg"
                            class="avatar avatar-32 photo"
                          />
                        </div>
                        <div class="atbd_name_time">
                          <p>Mark Rose</p>
                          <span class="review_time">6 hours ago</span>
                        </div>
                      </div>
                      <div class="atbd_rated_stars">
                        <ul>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_disable"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="review_content">
                      <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus</p>
                      <a href="#" class="reply">
                        <span class="la la-mail-reply-all"></span>Reply
                      </a>
                    </div>
                    <div class="review_reply_form">
                      <div class="atbd_review_avatar">
                        <img
                          alt
                          src="@/assets/img/review-author-thumb2.jpg"
                          class="avatar avatar-32 photo"
                        />
                      </div>
                      <form action="/">
                        <textarea placeholder="Message" class="form-control"></textarea>
                        <button class="btn btn-sm btn-secondary">Reply</button>
                      </form>
                    </div>
                    <!-- comment depth 2 -->
                    <div class="media-depth2">
                      <div class="atbd_single_review">
                        <div class="atbd_review_top">
                          <div class="atbd_avatar_wrapper">
                            <div class="atbd_review_avatar">
                              <img
                                alt
                                src="@/assets/img/review-author-thumb2.jpg"
                                class="avatar avatar-32 photo"
                              />
                            </div>
                            <div class="atbd_name_time">
                              <p>Conrad Jane</p>
                              <span class="review_time">6 hours ago</span>
                            </div>
                          </div>
                        </div>
                        <div class="review_content">
                          <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus vestibulum ac diam sit amet</p>
                          <a href="#" class="reply">
                            <span class="la la-mail-reply-all"></span>Reply
                          </a>
                        </div>
                        <div class="review_reply_form">
                          <div class="atbd_review_avatar">
                            <img
                              alt
                              src="@/assets/img/review-author-thumb.jpg"
                              class="avatar avatar-32 photo"
                            />
                          </div>
                          <form action="/">
                            <textarea placeholder="Message" class="form-control"></textarea>
                            <button class="btn btn-sm btn-secondary">Reply</button>
                          </form>
                        </div>
                      </div>
                      <!-- ends: .atbd_single_review -->
                    </div>
                    <!-- ends: .media-depth2 -->
                  </div>
                  <!-- ends:.atbd_single_review -->
                  <div class="atbd_single_review atbdp_static">
                    <div class="atbd_review_top">
                      <div class="atbd_avatar_wrapper">
                        <div class="atbd_review_avatar">
                          <img
                            alt
                            src="@/assets/img/review-author-thumb3.jpg"
                            class="avatar avatar-32 photo"
                          />
                        </div>
                        <div class="atbd_name_time">
                          <p>Conrad Jane</p>
                          <span class="review_time">6 hours ago</span>
                        </div>
                      </div>
                      <div class="atbd_rated_stars">
                        <ul>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                          <li>
                            <span class="rate_active"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="review_content">
                      <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus</p>
                      <a href="#" class="reply">
                        <span class="la la-mail-reply-all"></span>Reply
                      </a>
                    </div>
                    <div class="review_reply_form">
                      <div class="atbd_review_avatar">
                        <img
                          alt
                          src="@/assets/img/review-author-thumb2.jpg"
                          class="avatar avatar-32 photo"
                        />
                      </div>
                      <form action="/">
                        <textarea placeholder="Message" class="form-control"></textarea>
                        <button class="btn btn-sm btn-secondary">Reply</button>
                      </form>
                    </div>
                  </div>
                  <!-- ends: .atbd_single_review -->
                </div>
                <!-- ends: .client_review_list -->
                <div class="review_pagination">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <span class="la la-angle-left"></span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <span class="la la-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- ends: .atbd_content_module -->
            <div class="atbd_content_module atbd_review_form">
              <div class="atbd_content_module__tittle_area">
                <div class="atbd_area_title">
                  <h4>
                    <span class="la la-star"></span>Add a Review
                  </h4>
                </div>
              </div>
              <div class="atbdb_content_module_contents atbd_give_review_area">
                <div class="atbd_notice alert alert-info" role="alert">
                  <span class="la la-info" aria-hidden="true"></span>
                  You need to
                  <a href>Login</a> or
                  <a href>Register</a> to submit a review
                </div>
                <!-- ends: .atbd_notice -->
                <form action="/" id="atbdp_review_form" method="post">
                  <div class="atbd_review_rating_area">
                    <!--It should be displayed on the left side -->
                    <div class="atbd_review_update_rating">
                      <span>Rating:</span>
                      <star-rating :star-size="30" :increment="0.5"></star-rating>
                    </div>
                    <!-- ends: .atbd_review_update_rating -->
                  </div>
                  <!-- ends: .atbd_review_rating_area -->
                  <div class="form-group">
                    <textarea
                      name="content"
                      id="review_content"
                      class="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <div id="atbd_up_preview"></div>
                    <div class="atbd_upload_btn_wrap">
                      <label for="atbd_review_attachment">
                        <input type="file" id="atbd_review_attachment" hidden multiple />
                        <span class="btn btn-md atbd_upload_btn">
                          <span class="la la-cloud-upload"></span>Upload Photo
                        </span>
                      </label>
                      <span id="file_name"></span>
                    </div>
                  </div>
                  <!--If current user has a review then show him update and delete button-->
                  <button
                    class="btn btn-gradient btn-gradient-one"
                    type="submit"
                    id="atbdp_review_form_submit"
                  >Submit Review</button>
                  <!-- submit button -->
                </form>
              </div>
              <!-- ends: .atbd_give_review_area -->
            </div>
          </div>
          <!-- ends: .col-md-8 -->
          <div class="col-lg-4 col-md-5 m-bottom-30">
            <div class="widget atbd_widget widget-card">
              <div class="atbd_widget_title">
                <h4>
                  <span class="la la-phone"></span>Contact Info
                </h4>
              </div>
              <!-- ends: .atbd_widget_title -->
              <div class="widget-body atbd_author_info_widget">
                <div class="atbd_widget_contact_info">
                  <ul>
                    <li>
                      <span class="la la-map-marker"></span>
                      <span class="atbd_info">25 East Valley Road, Michigan</span>
                    </li>
                    <li>
                      <span class="la la-phone"></span>
                      <span class="atbd_info">(213) 995-7799</span>
                    </li>
                    <li>
                      <span class="la la-envelope"></span>
                      <span class="atbd_info">support@aazztech.com</span>
                    </li>
                    <li>
                      <span class="la la-globe"></span>
                      <a href class="atbd_info">www.aazztech.com</a>
                    </li>
                  </ul>
                </div>
                <!-- ends: .atbd_widget_contact_info -->
                <div class="atbd_social_wrap">
                  <p>
                    <a href>
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </p>
                  <p>
                    <a href>
                      <span class="fab fa-twitter"></span>
                    </a>
                  </p>
                  <p>
                    <a href>
                      <span class="fab fa-google-plus-g"></span>
                    </a>
                  </p>
                  <p>
                    <a href>
                      <span class="fab fa-linkedin-in"></span>
                    </a>
                  </p>
                  <p>
                    <a href>
                      <span class="fab fa-dribbble"></span>
                    </a>
                  </p>
                </div>
                <!-- ends: .atbd_social_wrap -->
              </div>
              <!-- ends: .widget-body -->
            </div>
            <!-- ends: .widget -->
            <div class="widget atbd_widget widget-card">
              <div class="atbd_widget_title">
                <h4>
                  <span class="la la-clock-o"></span> Business Hours
                </h4>
                <span class="badge badge-success">Open Now</span>
              </div>
              <!-- ends: .atbd_widget_title -->
              <div class="directory_open_hours">
                <ul>
                  <li class="atbd_open">
                    <span class="day">Monday</span>
                    <div class="atbd_open_close_time">
                      <span class="time">10:00 am</span> -
                      <span class="time">06:00 pm</span>
                    </div>
                  </li>
                  <li class="atbd_open atbd_today">
                    <span class="day">Tuesday</span>
                    <div class="atbd_open_close_time">
                      <span class="time">10:00 am</span> -
                      <span class="time">06:30 pm</span>
                    </div>
                  </li>
                  <li class="atbd_open">
                    <span class="day">Wednesday</span>
                    <div class="atbd_open_close_time">
                      <span class="time">09:00 am</span> -
                      <span class="time">05:00 pm</span>
                    </div>
                  </li>
                  <li class="atbd_open">
                    <span class="day">Thursday</span>
                    <div class="atbd_open_close_time">
                      <span class="time">10:00 am</span> -
                      <span class="time">07:00 pm</span>
                    </div>
                  </li>
                  <li class="atbd_open">
                    <span class="day">Friday</span>
                    <div class="atbd_open_close_time">
                      <span class="time">11:00 am</span> -
                      <span class="time">06:00 pm</span>
                    </div>
                  </li>
                  <li class="atbd_closed">
                    <span class="day">Saturday</span>
                    <span>Closed</span>
                  </li>
                  <li class="atbd_closed">
                    <span class="day">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- ends: .col-lg-4 -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";
import $ from "jquery";
import StarRating from "vue-star-rating";
export default {
  components: { Slick, StarRating },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          '<span class="slick-arrow prev-arrow"><i class="la la-angle-left"></i></span>',
        nextArrow:
          '<span class="slick-arrow next-arrow"><i class="la la-angle-right"></i></span>',
        fade: true,
        asNavFor: ".gallery-thumbs"
      },
      slickThumbOptions: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".gallery-images",
        dots: false,
        arrows: false,
        focusOnSelect: true
      },
      showMapInfo: false
    };
  },
  mounted() {
    this.initjQuery();
  },
  methods: {
    initjQuery() {
      var allPanels = $("p.ac-body").hide();
      $(".accordion-single.selected p.ac-body").show();
      $(".accordion-single > .faq-title > a").on("click", function(e) {
        allPanels.slideUp();
        $(this)
          .parent()
          .next()
          .slideDown();
        $(this)
          .parent()
          .parent()
          .addClass("selected")
          .siblings()
          .removeClass("selected");
        e.preventDefault();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>