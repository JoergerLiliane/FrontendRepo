<template>
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">

        <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{ obj.caption }}</h4>
            <p class="text-muted">{{ obj.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    portfolioJSON: [
      {
        img: '/something/random/img.jpg',
        caption: 'Login',
        title: 'You can login here!'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'Explore',
        title: 'Location'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'Finish',
        title: 'Your Incidents'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'PhoneNumber',
        title: 'Number'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'Help',
        title: 'Help Department'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'MyProfile',
        title: 'MyProfile'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'Current Gardians',
        title: 'Current Guardians'
      },
      {
        img: '/something/random/img.jpg',
        caption: 'Past Guardians',
        title: 'Past Guardians'
      },

    ]
  })
}
</script>

<style lang="css">

</style>

