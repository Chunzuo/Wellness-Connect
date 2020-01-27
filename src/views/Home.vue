<template>
  <div>
    <section class="intro-wrapper bgimage overlay overlay--dark">
      <div class="bg_image_holder">
        <img src="@/assets/img/intro.jpg" alt />
      </div>

      <div class="directory_content_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="search_title_area">
                <h2 class="title">Find the Professional</h2>
                <p class="sub_title">All the top doctors, lawyers, life coaches and more..</p>
              </div>
              <!-- ends: .search_title_area -->
              <form action="/" class="search_form">
                <div class="atbd_seach_fields_wrapper">
                  <div class="single_search_field search_query">
                    <input class="form-control search_fields" type="text" placeholder="Zipcode" />
                  </div>
                  <div class="single_search_field search_category">
                    <select class="search_fields" id="at_biz_dir-category">
                      <option value>Select a category</option>
                      <optgroup label="Doctors">
                        <option value="automobile">Surgeon</option>
                        <option value="education">Dentist</option>
                        <option value="event">Physician</option>
                      </optgroup>
                      <option value="yoga">Yoga instructors</option>
                      <option value="lawyer">Lawyer</option>
                      <option value="life-coache">Life coaches</option>
                    </select>
                  </div>
                  <div class="single_search_field search_location">
                    <select class="search_fields" id="at_biz_dir-location">
                      <option value>Select a location</option>
                      <option value="ab">AB Simple</option>
                      <option value="australia">Australia</option>
                      <option value="australia-australia">Australia</option>
                    </select>
                  </div>
                  <div class="atbd_submit_btn">
                    <button
                      type="submit"
                      class="btn btn-block btn-gradient btn-gradient-one btn-md btn_search"
                      @click.prevent="showSearchResult"
                    >Search</button>
                  </div>
                </div>
              </form>
              <!-- ends: .search_form -->
              <div class="directory_home_category_area">
                <ul class="categories">
                  <li>
                    <a href>
                      <span class="color-primary">
                        <i class="la la-cutlery"></i>
                      </span>
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span class="color-success">
                        <i class="la la-map-marker"></i>
                      </span>
                      Lawyers
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span class="color-warning">
                        <i class="la la-shopping-cart"></i>
                      </span>
                      Yoga instructors
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span class="color-danger">
                        <i class="la la-bed"></i>
                      </span>
                      Life coaches
                    </a>
                  </li>
                </ul>
              </div>
              <!-- ends: .directory_home_category_area -->
            </div>
            <!-- ends: .col-lg-10 -->
          </div>
        </div>
      </div>
    </section>

    <section class="categories-cards section-padding-two">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>What Kind of service do you want?</h2>
              <p>Find tablented professionals around the world by categories.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat1.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-cutlery"></span>
                      </div>
                      <h4 class="cat-name">Doctors</h4>
                      <span class="badge badge-pill badge-success">48 professionals</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat2.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-map-marker"></span>
                      </div>
                      <h4 class="cat-name">Yoga instructors</h4>
                      <span class="badge badge-pill badge-success">74 professionals</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat3.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-shopping-cart"></span>
                      </div>
                      <h4 class="cat-name">Laywers</h4>
                      <span class="badge badge-pill badge-success">27 professionals</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat4.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-bank"></span>
                      </div>
                      <h4 class="cat-name">Life coaches</h4>
                      <span class="badge badge-pill badge-success">103 professionals</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat5.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-bed"></span>
                      </div>
                      <h4 class="cat-name">Hotel &amp; Travel</h4>
                      <span class="badge badge-pill badge-success">11 Listings</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
          <div class="col-lg-4 col-sm-6">
            <div class="category-single category--img">
              <figure class="category--img4">
                <img src="img/cat6.jpg" alt />
                <figcaption class="overlay-bg">
                  <a href class="cat-box">
                    <div>
                      <div class="icon">
                        <span class="la la-glass"></span>
                      </div>
                      <h4 class="cat-name">Food &amp; Drink</h4>
                      <span class="badge badge-pill badge-success">29 Listings</span>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
            <!-- ends: .category-single -->
          </div>
          <!-- ends: .col -->
        </div>
      </div>
    </section>

    <section class="listing-cards section-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Best Proessionals</h2>
              <p>Find the top rated professionals per category</p>
            </div>
          </div>
          <div class="listing-cards-wrapper col-lg-12">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p1.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge">
                          <li>
                            <span class="atbd_badge atbd_badge_featured">Featured</span>
                          </li>
                        </ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Mr.James</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span class="atbd_meta atbd_listing_price">$55.00</span>
                          <span class="atbd_meta atbd_badge_open">Open Now</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since 2 months ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-glass"></span>Lawyer
                            </a>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p2.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge">
                          <li>
                            <span class="atbd_badge atbd_badge_popular">Famous</span>
                          </li>
                        </ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Dr.Tomas</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span
                            class="atbd_meta atbd_listing_average_pricing"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Average"
                          >
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                          </span>
                          <span class="atbd_meta atbd_badge_close">Closed</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since 2 months ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-map-marker"></span>Doctors
                            </a>
                            <div class="atbd_cat_popup">
                              <span>+2</span>
                              <div class="atbd_cat_popup_wrapper">
                                <span>
                                  <a href>Event</a>
                                </span>
                                <span>
                                  <a href>Food</a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p3.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge">
                          <li>
                            <span class="atbd_badge atbd_badge_new">New</span>
                          </li>
                        </ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Miss.Sue</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span
                            class="atbd_meta atbd_listing_average_pricing"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Average"
                          >
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                          </span>
                          <span class="atbd_meta atbd_badge_close">Closed</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since: 1 day ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-shopping-cart"></span>Yoga instructor
                            </a>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p4.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge">
                          <li>
                            <span class="atbd_badge atbd_badge_featured">Featured</span>
                          </li>
                          <li>
                            <span class="atbd_badge atbd_badge_popular">Famous</span>
                          </li>
                        </ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Dr.Jeffery</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span
                            class="atbd_meta atbd_listing_average_pricing"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Average"
                          >
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                          </span>
                          <span class="atbd_meta atbd_badge_open">Open Now</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since 2 years ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-bank"></span>Life coache
                            </a>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p5.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge"></ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Mrs.Laura</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span class="atbd_meta atbd_listing_price">$55.00</span>
                          <span class="atbd_meta atbd_badge_close">Closed</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since: 2 weeks ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-bed"></span>Nurse
                            </a>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-4 col-sm-6">
                <div class="atbd_single_listing">
                  <article class="atbd_single_listing_wrapper">
                    <figure class="atbd_listing_thumbnail_area">
                      <div class="atbd_listing_image">
                        <a href>
                          <img src="img/p6.jpg" alt="listing image" />
                        </a>
                      </div>
                      <!-- ends: .atbd_listing_image -->
                      <div class="atbd_author atbd_author--thumb">
                        <a href>
                          <img src="img/author-thumb2.jpg" alt="Author Image" />
                          <span class="custom-tooltip">Jeffery A, Owner</span>
                        </a>
                      </div>
                      <div class="atbd_thumbnail_overlay_content">
                        <ul class="atbd_upper_badge"></ul>
                        <!-- ends .atbd_upper_badge -->
                      </div>
                      <!-- ends: .atbd_thumbnail_overlay_content -->
                    </figure>
                    <!-- ends: .atbd_listing_thumbnail_area -->
                    <div class="atbd_listing_info">
                      <div class="atbd_content_upper">
                        <h4 class="atbd_listing_title">
                          <a href>Mr.Walid</a>
                        </h4>
                        <div class="atbd_listing_meta">
                          <span class="atbd_meta atbd_listing_rating">
                            4.5
                            <i class="la la-star"></i>
                          </span>
                          <span
                            class="atbd_meta atbd_listing_average_pricing"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Average"
                          >
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span class="atbd_active">
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                            <span>
                              <img src="img/svg/dollar.svg" class="svg" alt />
                            </span>
                          </span>
                          <span class="atbd_meta atbd_badge_open">Open Now</span>
                        </div>
                        <!-- End atbd listing meta -->
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
                            <li>
                              <p>
                                <span class="la la-calendar-check-o"></span>Member since: 2 months ago
                              </p>
                            </li>
                          </ul>
                        </div>
                        <!-- End atbd listing meta -->
                      </div>
                      <!-- end .atbd_content_upper -->
                      <div class="atbd_listing_bottom_content">
                        <div class="atbd_content_left">
                          <div class="atbd_listing_category">
                            <a href>
                              <span class="la la-cutlery"></span>Consultant
                            </a>
                            <div class="atbd_cat_popup">
                              <span>+2</span>
                              <div class="atbd_cat_popup_wrapper">
                                <span>
                                  <a href>Event</a>
                                </span>
                                <span>
                                  <a href>Food</a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul class="atbd_content_right">
                          <li class="atbd_count">
                            <span class="la la-eye"></span>900+
                          </li>
                          <li class="atbd_save">
                            <span class="la la-heart-o"></span>
                          </li>
                        </ul>
                      </div>
                      <!-- end .atbd_listing_bottom_content -->
                    </div>
                    <!-- ends: .atbd_listing_info -->
                  </article>
                  <!-- atbd_single_listing_wrapper -->
                </div>
              </div>
              <!-- ends: .col-lg-4 -->
              <div class="col-lg-12 text-center m-top-20">
                <a href class="btn btn-gradient btn-gradient-two">Explore All 200+</a>
              </div>
            </div>
          </div>
          <!-- ends: .listing-cards-wrapper -->
        </div>
      </div>
    </section>

    <section class="cta section-padding border-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>
                Why
                <span>Wellness-Connect</span> for You?
              </h2>
              <p>Find the famous professionals around you</p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <img src="img/svg/illustration-1.svg" alt class="svg" />
              </div>
              <div class="col-lg-5 offset-lg-1 col-md-6 mt-5 mt-md-0">
                <ul class="feature-list-wrapper list-unstyled">
                  <li>
                    <div class="icon">
                      <span class="circle-secondary">
                        <i class="la la-check-circle"></i>
                      </span>
                    </div>
                    <div class="list-content">
                      <h4>Claim Listing</h4>
                      <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="circle-success">
                        <i class="la la-money"></i>
                      </span>
                    </div>
                    <div class="list-content">
                      <h4>Paid Listing</h4>
                      <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="circle-primary">
                        <i class="la la-line-chart"></i>
                      </span>
                    </div>
                    <div class="list-content">
                      <h4>Promote your Business</h4>
                      <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                    </div>
                  </li>
                </ul>
                <!-- ends: .feature-list-wrapper -->
                <ul class="action-btns list-unstyled">
                  <li>
                    <a href class="btn btn-success">See our Pricing</a>
                  </li>
                  <li>
                    <a href class="btn btn-primary">Submit Listings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-wrapper p-top-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Trusted By Over 10,000+ Users</h2>
              <p>Here is what people say about WellnessConnect</p>
            </div>
          </div>
          <!-- ends: .col-lg-12 -->
          <!-- <carousel  class="testimonial-carousel owl-carousel"> -->
          <carousel
            :dots="false"
            :items="1"
            :nav="false"
            :autoplay="true"
            class="testimonial-carousel"
            style="width: 100%;"
          >
            <div class="carousel-single">
              <div class="author-thumb">
                <img src="img/tthumb1.jpg" alt class="rounded-circle" />
              </div>
              <div class="author-info">
                <h4>Francis Burton</h4>
                <span>Toronto, Canada</span>
              </div>
              <p class="author-comment">
                Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident
                culpa officia deserunt mollit.
              </p>
            </div>
            <!-- ends: .carousel-single -->
            <div class="carousel-single">
              <div class="author-thumb">
                <img src="img/tthumb1.jpg" alt class="rounded-circle" />
              </div>
              <div class="author-info">
                <h4>Francis Burton</h4>
                <span>Toronto, Canada</span>
              </div>
              <p class="author-comment">
                Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident
                culpa officia deserunt mollit.
              </p>
            </div>
            <!-- ends: .carousel-single -->
            <div class="carousel-single">
              <div class="author-thumb">
                <img src="img/tthumb1.jpg" alt class="rounded-circle" />
              </div>
              <div class="author-info">
                <h4>Francis Burton</h4>
                <span>Toronto, Canada</span>
              </div>
              <p class="author-comment">
                Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident
                culpa officia deserunt mollit.
              </p>
            </div>
            <!-- ends: .carousel-single -->
          </carousel>
          <!-- ends: .testimonial-carousel -->
        </div>
      </div>
    </section>

    <section class="subscribe-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h1>Subscribe to Newsletter</h1>
            <p>Subscribe to get update and information. Don't worry, we won't send spam!</p>
            <form action="/" class="subscribe-form m-top-40">
              <div class="form-group">
                <span class="la la-envelope-o"></span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <button class="btn btn-gradient btn-gradient-one">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jQuery from "jquery";
require("select2/dist/js/select2.full.js");
import carousel from "vue-owl-carousel";

export default {
  name: "home",
  components: {
    carousel
  },
  data() {
    return {
      categoryOptions: ["Automobile"]
    };
  },
  mounted() {
    this.initJQuery();
  },
  methods: {
    initJQuery() {
      const $ = jQuery;

      $("#at_biz_dir-category").select2({
        placeholder: "Select a category",
        width: "100%",
        containerCssClass: "form-control"
      });

      $("#at_biz_dir-location").select2({
        multiple: false,
        width: "100%",
        placeholder: "Select a location",
        containerCssClass: "form-control"
      });

      //setting css bg image as inline in html
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
    },
    showSearchResult() {
      this.$router.push({
        path: "/search",
        query: { zipcode: "0001", category: 0, name: "Test User" }
      });
    }
  }
};
</script>
