<template>
  <div>
    <section class="faq-wrapper section-padding border-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Your Questions Answered</h2>
              <p>Eiusmod temporeum dicant partem scripserit</p>
            </div>
          </div>
          <!-- ends: .col-lg-12 -->
          <div class="col-lg-12">
            <div class="faq-contents">
              <div class="atbd_content_module atbd_faqs_module">
                <div class="atbd_content_module__tittle_area">
                  <div class="atbd_area_title">
                    <h4>
                      <span class="la la-question-circle"></span>Lisiitng FAQ's
                    </h4>
                  </div>
                </div>
                <div class="atbdb_content_module_contents">
                  <div class="atbdp-accordion">
                    <div class="accordion-single selected">
                      <h3 class="faq-title">
                        <a href="#">How to open an account?</a>
                      </h3>
                      <p
                        class="ac-body"
                        style="display: block;"
                      >Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Nemo ucxqui officia voluptatem accusantium.</p>
                    </div>
                    <div class="accordion-single">
                      <h3 class="faq-title">
                        <a href="#">How to add listing?</a>
                      </h3>
                      <p
                        class="ac-body"
                        style="display: none;"
                      >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                    </div>
                    <div class="accordion-single">
                      <h3 class="faq-title">
                        <a href="#">What is featured listing?</a>
                      </h3>
                      <p
                        class="ac-body"
                        style="display: none;"
                      >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                    </div>
                    <div class="accordion-single">
                      <h3 class="faq-title">
                        <a href="#">How to add listing?</a>
                      </h3>
                      <p
                        class="ac-body"
                        style="display: none;"
                      >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                    </div>
                    <div class="accordion-single">
                      <h3 class="faq-title">
                        <a href="#">What is featured listing?</a>
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
            </div>
            <!-- ends: .faq-contents -->
          </div>
          <!-- ends: .col-lg-12 -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    this.initJQuery();
    this.$store.commit("updateHeaderItem", "Help");
  },
  methods: {
    initJQuery() {
      /* FAQ Accordion */
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