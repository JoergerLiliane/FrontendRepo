<template>
  <div id="app">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Your Journey with Safety</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>




        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#guardian">Guardian</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#location">Location</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome To your Dashboard!</div>
          <div class="intro-heading text-uppercase">It's Nice To See You</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#profile">Go To Your Profile</a>
        </div>
      </div>
    </header>

    <!-- Login -->






    <!-- Profile  -->
    <section id="profile" class="vh-100" style="background-color: #f4f5f7;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-6 mb-4 mb-lg-0">
            <div class="card mb-3" style="border-radius: .5rem;">
              <div class="row g-0">
                <div class="col-md-4 gradient-custom text-center text-white"
                     style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                       alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                  <h5></h5>
                  <p></p>
                  <i class="far fa-edit mb-5"></i>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <h6>Information</h6>
                    <hr class="mt-0 mb-4">
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Email</h6>
                        <p class="text-muted">pipi@langstrumpf.com</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Phone</h6>
                        <p class="text-muted">123 456 789</p>
                      </div>
                    </div>
                    <h6>Address</h6>
                    <hr class="mt-0 mb-4">
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Hauptstraße 100</h6>
                        <p class="text-muted">Berlin</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>More Datas</h6>
                        <p class="text-muted">xxx</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-start">
                      <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                      <UserProfile></UserProfile>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Guardian -->
    <section id="guardian">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Current Guardians</h2>
            <h3 class="section-subheading text-muted">What You Shoud know</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">

              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt="">
                </div>

                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>Founded in 2022</h4>
                    <h4 class="subheading">Our Humble Beginnings</h4>
                    <div class="d-flex pt-1">
                      <button type="button" class="btn btn-outline-primary me-1 flex-grow-0">Chat</button>
                      <button type="button" class="btn btn-primary flex-grow-0">Request</button>
                    </div>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">When It Started!</p>
                  </div>

                </div>

                <div>
                  <p class="small text-muted mb-1">On Your Priority Level</p>
                  <p class="mb-0">1</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Number of Users Protecting</p>
                  <p class="mb-0">10</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Reliability</p>
                  <p class="mb-0">High</p>
                </div>


              </li>




              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 class="subheading">Goal Of Safety WebApp</h4>
                    <div class="d-flex pt-1">
                      <button type="button" class="btn btn-outline-primary me-1 flex-grow-0">Chat</button>
                      <button type="button" class="btn btn-primary flex-grow-0">Request</button>
                    </div>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">What Is The Goal...!</p>
                  </div>
                </div>

                <div>
                  <p class="small text-muted mb-1">On Your Priority Level</p>
                  <p class="mb-0">2</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Number of Users Protecting</p>
                  <p class="mb-0">6</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Reliability</p>
                  <p class="mb-0">High</p>
                </div>
              </li>


              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 class="subheading">What You Can Do:....!</h4>
                    <div class="d-flex pt-1">
                      <button type="button" class="btn btn-outline-primary me-1 flex-grow-0">Chat</button>
                      <button type="button" class="btn btn-primary flex-grow-0">Request</button>
                    </div>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Choose Your Guardian And Get Help When You Need It!</p>
                  </div>
                </div>


                <div>
                  <p class="small text-muted mb-1">On Your Priority Level</p>
                  <p class="mb-0">3</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Number of Users Protecting</p>
                  <p class="mb-0">4</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Reliability</p>
                  <p class="mb-0">Medium</p>
                </div>
              </li>


              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 class="subheading">Feedback</h4>
                    <div class="d-flex pt-1">
                      <button type="button" class="btn btn-outline-primary me-1 flex-grow-0">Chat</button>
                      <button type="button" class="btn btn-primary flex-grow-0">Request</button>
                    </div>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Feedback!</p>
                  </div>
                </div>


                <div>
                  <p class="small text-muted mb-1">On Your Priority Level</p>
                  <p class="mb-0">4</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Number of Users Protecting</p>
                  <p class="mb-0">1</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Reliability</p>
                  <p class="mb-0">Low</p>
                </div>
              </li>


              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>Add
                    <br>A
                    <br>Guardian</h4>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </div>

    </section>


    <!-- Add New Guardians -->

    <section class="vh-100" style="background-color: #9de2ff;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-md-9 col-lg-7 col-xl-5">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-4">
                <div class="d-flex text-black">
                  <div class="flex-shrink-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                         alt="Generic placeholder image" class="img-fluid"
                         style="width: 180px; border-radius: 10px;">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h5 class="mb-1">Danny McLoan</h5>
                    <p class="mb-2 pb-1" style="color: #2b2a2a;">Senior Journalist</p>
                    <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                         style="background-color: #efefef;">
                      <div>
                        <p class="small text-muted mb-1">Articles</p>
                        <p class="mb-0">41</p>
                      </div>
                      <div class="px-3">
                        <p class="small text-muted mb-1">Followers</p>
                        <p class="mb-0">976</p>
                      </div>
                      <div>
                        <p class="small text-muted mb-1">Rating</p>
                        <p class="mb-0">8.5</p>
                      </div>
                    </div>
                    <div class="d-flex pt-1">
                      <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                      <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- About -->
    <section class="bg-light" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About Us</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/guardian/1.jpg" alt="">
              <h4>Kay Garland</h4>
              <p class="text-muted">Lead Designer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/guardian/2.jpg" alt="">
              <h4>Larry Parker</h4>
              <p class="text-muted">Lead Marketer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="img/guardian/3.jpg" alt="">
              <h4>Diana Pertersen</h4>
              <p class="text-muted">Lead Developer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>




    <!-- Clients -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
            </a>
          </div>
          <div class="col-md-3 col-sm-6">
            <a href="#">
              <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Your Website 2018</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Location Grid -->
    <LocaTion></LocaTion>

    <!-- Location Modals -->
    <section id="location">
      <div class="container">

        <div class="row">
          <div class="col-lg-12 text-center">
            <h4 class="section-heading text-uppercase">Your Location</h4>

          </div>

        </div>
      </div>
      <LocationView></LocationView>

    </section>




  </div>
</template>

<script>


import UserProfile from "@/views/UserProfile";
import LocationView from "@/views/LocationView";



export default {
  name: 'app',
  components: {
    LocationView,
    UserProfile
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
}


.vue-bg {
  background: #bce5d0;
}
</style>
