<template>
  <div>
    <div class="row">
      <div class="col-xl-3 col-md-12 p-left-0 p-right-0" sticky-container>
        <div class="listings-sidebar" v-sticky="true">
          <div class="search-area default-ad-search">
            <form action="#">
              <div class="form-group">
                <input type="text" placeholder="What are you looking for?" class="form-control" />
              </div>
              <!-- ends: .form-group -->
              <div class="form-group">
                <div class="select-basic">
                  <select class="form-control ad_search_category">
                    <option>Select Category</option>
                    <option>Lawyer</option>
                    <option>&nbsp;&nbsp; Food</option>
                    <option>&nbsp;&nbsp; Lunch Pack</option>
                    <option>Doctor</option>
                    <option>&nbsp;&nbsp; Travel</option>
                    <option>&nbsp;&nbsp; Booking</option>
                    <option>&nbsp;&nbsp; Hotel</option>
                    <option>&nbsp;&nbsp; Location</option>
                    <option>Yoga instructor</option>
                    <option>&nbsp;&nbsp; Accessories</option>
                    <option>&nbsp;&nbsp; Clothing</option>
                    <option>&nbsp;&nbsp; Gadgets</option>
                  </select>
                </div>
              </div>
              <!-- ends: .form-group -->
              <div class="form-group">
                <div class="position-relative">
                  <input
                    type="text"
                    placeholder="City, state or zip code"
                    class="form-control location-name"
                  />
                  <button type="submit" class="locator">
                    <span class="la la-crosshairs"></span>
                  </button>
                </div>
              </div>
              <!-- ends: .form-group -->

              <!-- ends: .form-group -->
              <div class="check-btn">
                <div class="btn-checkbox active-color-secondary m-bottom-10">
                  <label>
                    <input type="checkbox" value="1" />
                    <span class="color-success">
                      <i class="la la-clock-o"></i> Open Now
                    </span>
                  </label>
                </div>
                <div class="btn-checkbox active-color-secondary m-bottom-10">
                  <label>
                    <input type="checkbox" value="1" />
                    <span class="color-warning">
                      <i class="la la-tags"></i> Featured
                    </span>
                  </label>
                </div>
                <div class="btn-checkbox active-color-secondary m-bottom-10">
                  <label>
                    <input type="checkbox" value="1" />
                    <span class="color-danger">
                      <i class="la la-tags"></i> Popular
                    </span>
                  </label>
                </div>
                <div class="btn-checkbox active-color-secondary m-bottom-10">
                  <label>
                    <input type="checkbox" value="1" />
                    <span class="color-info">
                      <i class="la la-tags"></i> New
                    </span>
                  </label>
                </div>
              </div>

              <div class="filter-checklist">
                <h5>Filter by Ratings</h5>
                <div class="sort-rating">
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck7" checked />
                    <label class="custom-control-label" for="customCheck7">
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck8" />
                    <label class="custom-control-label" for="customCheck8">
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck9" />
                    <label class="custom-control-label" for="customCheck9">
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck10" />
                    <label class="custom-control-label" for="customCheck10">
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck11" />
                    <label class="custom-control-label" for="customCheck11">
                      <span class="active">
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                  <div
                    class="custom-control custom-checkbox checkbox-outline checkbox-outline-primary"
                  >
                    <input type="checkbox" class="custom-control-input" id="customCheck12" />
                    <label class="custom-control-label" for="customCheck12">
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                      <span>
                        <i class="la la-star"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- ends: .filter-checklist -->
            </form>
            <!-- ends: form -->
          </div>
          <!-- ends: .default-ad-search -->
        </div>
      </div>
      <div class="col-xl-5 col-md-12 p-left-0 p-right-0 search-panel">
        <div class="all-listing-wrapper">
          <div class="row">
            <div class="col-lg-12">
              <div class="atbd_generic_header">
                <div class="atbd_generic_header_title">
                  <h4>Find result</h4>
                  <p>Total Professional Found: 15</p>
                </div>
                <!-- ends: .atbd_generic_header_title -->
                <div class="atbd_listing_action_btn btn-toolbar" role="toolbar">
                  <!-- Views dropdown -->
                  <div class="view-mode">
                    <a
                      class="action-btn"
                      :class="{'active': viewMode == 0}"
                      href="javascript:;"
                      @click="viewMode = 0"
                    >
                      <span class="la la-th-large"></span>
                    </a>
                    <a
                      class="action-btn"
                      :class="{'active': viewMode == 1}"
                      href="javascript:;"
                      @click="viewMode = 1"
                    >
                      <span class="la la-list"></span>
                    </a>
                  </div>
                  <!-- Orderby dropdown -->
                  <div class="dropdown">
                    <a
                      class="action-btn dropdown-toggle"
                      href
                      role="button"
                      id="dropdownMenuLink2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                      <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                      <a class="dropdown-item" href>A to Z ( name )</a>
                      <a class="dropdown-item" href>Z to A ( name )</a>
                      <!-- <a class="dropdown-item active" href>Latest listings</a>
                      <a class="dropdown-item" href>Oldest listings</a>
                      <a class="dropdown-item" href>Popular listings</a>
                      <a class="dropdown-item" href>Price ( low to high )</a>
                      <a class="dropdown-item" href>Price ( high to low )</a>
                      <a class="dropdown-item" href>Random listings</a>-->
                    </div>
                  </div>
                </div>
                <!-- ends: .atbd_listing_action_btn -->
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="viewMode == 0">
          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p1.jpg" alt="listing image" />
                    </a>
                  </div>

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
                  </div>
                </figure>

                <div class="atbd_listing_info">
                  <div class="atbd_content_upper">
                    <h4 class="atbd_listing_title">
                      <router-link to="/professional-detail/1">Mr.James</router-link>
                    </h4>
                    <div class="atbd_listing_meta">
                      <span class="atbd_meta atbd_listing_rating">
                        4.5
                        <i class="la la-star"></i>
                      </span>
                      <span class="atbd_meta atbd_listing_price">$55.00</span>
                      <span class="atbd_meta atbd_badge_open">Open Now</span>
                    </div>

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
                  </div>

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
                </div>
              </article>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p2.jpg" alt="listing image" />
                    </a>
                  </div>

                  <div class="atbd_author atbd_author--thumb">
                    <a href>
                      <img src="img/author-thumb2.jpg" alt="Author Image" />
                      <span class="custom-tooltip">Jeffery A, Owner</span>
                    </a>
                  </div>
                  <div class="atbd_thumbnail_overlay_content">
                    <ul class="atbd_upper_badge">
                      <li>
                        <span class="atbd_badge atbd_badge_popular">Popular</span>
                      </li>
                    </ul>
                  </div>
                </figure>

                <div class="atbd_listing_info">
                  <div class="atbd_content_upper">
                    <h4 class="atbd_listing_title">
                      <a href>Dr. Tomas</a>
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
                  </div>

                  <div class="atbd_listing_bottom_content">
                    <div class="atbd_content_left">
                      <div class="atbd_listing_category">
                        <a href>
                          <span class="la la-map-marker"></span>Doctor
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
                </div>
              </article>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p3.jpg" alt="listing image" />
                    </a>
                  </div>

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
                  </div>
                </figure>

                <div class="atbd_listing_info">
                  <div class="atbd_content_upper">
                    <h4 class="atbd_listing_title">
                      <a href>Miss. Sue</a>
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
                  </div>

                  <div class="atbd_listing_bottom_content">
                    <div class="atbd_content_left">
                      <div class="atbd_listing_category">
                        <a href>
                          <span class="la la-Yoga instructor-cart"></span>Yoga instructor
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
                </div>
              </article>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p4.jpg" alt="listing image" />
                    </a>
                  </div>

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
                        <span class="atbd_badge atbd_badge_popular">Popular</span>
                      </li>
                    </ul>
                  </div>
                </figure>

                <div class="atbd_listing_info">
                  <div class="atbd_content_upper">
                    <h4 class="atbd_listing_title">
                      <a href>Dr. John</a>
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
                  </div>

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
                </div>
              </article>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p5.jpg" alt="listing image" />
                    </a>
                  </div>

                  <div class="atbd_author atbd_author--thumb">
                    <a href>
                      <img src="img/author-thumb2.jpg" alt="Author Image" />
                      <span class="custom-tooltip">Jeffery A, Owner</span>
                    </a>
                  </div>
                  <div class="atbd_thumbnail_overlay_content">
                    <ul class="atbd_upper_badge"></ul>
                  </div>
                </figure>

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
                      <span class="atbd_meta atbd_badge_close">Closed</span>
                    </div>

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
                  </div>

                  <div class="atbd_listing_bottom_content">
                    <div class="atbd_content_left">
                      <div class="atbd_listing_category">
                        <a href>
                          <span class="la la-bed"></span>Hotel &amp; Travel
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
                </div>
              </article>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="atbd_single_listing">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p6.jpg" alt="listing image" />
                    </a>
                  </div>

                  <div class="atbd_author atbd_author--thumb">
                    <a href>
                      <img src="img/author-thumb2.jpg" alt="Author Image" />
                      <span class="custom-tooltip">Jeffery A, Owner</span>
                    </a>
                  </div>
                  <div class="atbd_thumbnail_overlay_content">
                    <ul class="atbd_upper_badge"></ul>
                  </div>
                </figure>

                <div class="atbd_listing_info">
                  <div class="atbd_content_upper">
                    <h4 class="atbd_listing_title">
                      <a href>Mrs. Syra</a>
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
                  </div>

                  <div class="atbd_listing_bottom_content">
                    <div class="atbd_content_left">
                      <div class="atbd_listing_category">
                        <a href>
                          <span class="la la-cutlery"></span>Nurse
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
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="row" v-if="viewMode == 1">
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p1.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p2.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
                  <div class="atbd_thumbnail_overlay_content">
                    <ul class="atbd_upper_badge">
                      <li>
                        <span class="atbd_badge atbd_badge_popular">Popular</span>
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
                      <a href>Dr. Tomas</a>
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
                          <span class="la la-map-marker"></span>Doctor
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p3.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
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
                      <a href>Miss. Sue</a>
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
                          <span class="la la-Yoga instructor-cart"></span>Yoga instructor
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p4.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p5.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
                  <div class="atbd_thumbnail_overlay_content">
                    <ul class="atbd_upper_badge">
                      <li>
                        <span class="atbd_badge atbd_badge_popular">Popular</span>
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
                      <a href>Dr. Tomas</a>
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
                          <span class="la la-map-marker"></span>Doctor
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="atbd_single_listing atbd_listing_list">
              <article class="atbd_single_listing_wrapper">
                <figure class="atbd_listing_thumbnail_area">
                  <div class="atbd_listing_image">
                    <a href>
                      <img src="img/p6.jpg" alt="listing image" />
                    </a>
                  </div>
                  <!-- ends: .atbd_listing_image -->
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
                      <a href>Miss. Sue</a>
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
                          <span class="la la-Yoga instructor-cart"></span>Yoga instructor
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
                      <li>
                        <div class="atbd_author atbd_author--thumb">
                          <a href>
                            <img src="img/author-thumb2.jpg" alt="Author Image" />
                            <span class="custom-tooltip">Jeffery A, Owner</span>
                          </a>
                        </div>
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
          <!-- ends: .col-lg-12 -->
        </div>
        <div class="row">
          <div class="col-lg-12">
            <nav class="navigation pagination d-flex justify-content-end" role="navigation">
              <div class="nav-links">
                <a class="prev page-numbers" href>
                  <span class="la la-long-arrow-left"></span>
                </a>
                <a class="page-numbers" href>1</a>
                <span aria-current="page" class="page-numbers current">2</span>
                <a class="page-numbers" href>3</a>
                <a class="next page-numbers" href>
                  <span class="la la-long-arrow-right"></span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-12 p-left-0 p-right-0" sticky-container>
        <gmap-map
          :style="[{height: contentHeight}, {width: '100%'}]"
          :zoom="15"
          :center="{lat:48.2304504, lng:16.3560885}"
          v-sticky="true"
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
  </div>
</template>

<script>
import $ from "jquery";
import Sticky from "vue-sticky-directive";

require("select2/dist/js/select2.full.js");
export default {
  mounted() {
    const height = $(window).height();
    this.contentHeight = `${height}px`;
    this.initJquery();
  },
  data() {
    return {
      contentHeight: "",
      viewMode: 0, // 0: Grid View, 1: List View
      showMapInfo: false
    };
  },
  directives: { Sticky },
  methods: {
    initJquery() {
      $(".ad_search_category").select2({
        placeholder: "Select a category",
        width: "100%",
        containerCssClass: "form-control"
      });
    }
  }
};
</script>

<style lang="css" scoped>
.overflow-auto {
  overflow: hidden;
}

.all-listing-wrapper {
  padding: 1rem 0;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.search-panel {
  background: #f5f7fc;
}
</style>