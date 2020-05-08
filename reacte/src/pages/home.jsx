import React from 'react';

class Home extends React.Component{

  render(){
    return <>
       {/* <!-- header --> */}
    <header class="navbar-fixed-top">
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#skills">Skills</a></li>
                {/* <!-- <li><a href="#projects">projects</a></li> --> */}
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    </header>
    {/* <!-- ./header --> */}
    
    {/* <!-- home --> */}
    <div class="section" id="home" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="box_intro my-auto">
                <div class="plus_intro" data-aos="fade-up" data-aos-delay="0">
                    <h1 class="dev-name">Hello, I'm <b>MOMO Tidjani</b></h1>
                    <h1>Backend developer<br /> </h1> 
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ./home --> */}
    
    {/* <!-- about --> */}
    <div class="section" id="about">
        <div class="container">
            <div class="col-md-6" data-aos="fade-up">
                <h4>01</h4>
                <h1 class="size-50">Know <br /> About me</h1>
                <div class="h-50"></div>
                <p>Hello 👋 I'm Momo, a full stack software engineer with 3+ years experience. I have worked recently at Qognitiv Technologies as Backend developer. Qognitiv as a FinTech develops thier products on SOA, my job there was writing and testing NodeJs and Python microservices and thier corresponding Docker configuration ready for dev and production environments.</p>
                <p>I have built many apps on NodeJs, flask, angular and react that are currently used in production. I’m passionate about learning, expanding my knowledge and building high quality software.</p>
                <p>Contact me to talk about working together!</p>
                <div class="h-50"></div> 
                {/* <!-- <img src="img/Signature.svg" width="230" alt="" /> --> */}
                <div class="h-50"></div>
            </div>
            <div class="col-md-6 about-img-div">
                <div class="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                <img src="img/about-img.jpg" width="400" class="img-responsive" alt="" align="right" data-aos="fade-right" data-aos-delay="0" />
            </div>
        </div>
    </div>
    {/* <!-- ./about --> */}
    
    {/* <!-- experience  --> */}
    <div class="section" id="experience">
        <div class="container">
            <div class="col-md-12">
                <h4>02</h4>
                <h1 class="size-50"> Experience</h1>
                <div class="h-50"></div>
            </div>
            <div class="col-md-12">
                <ul class="timeline">
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">December 2019 - Present</p>
                            <h3>Qognitiv Technologies</h3>
                            <h4>Backend developer</h4>
                            <p><strong>Douala, Cameroun</strong>
                                <br /> <strong>Qognitiv</strong> is a FinTech offering white label platform for secure payment. In a team of 18 developers I’m in charge of writing some Backend services and providing monitoring panels for this services.</p>
                        </div>
                    </li>
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">December 2018 - December 2019 </p>
                            <h3>Spartiat IT</h3>
                            <h4>Web/Mobile developer</h4>
                            <p><strong>Douala, Cameroon</strong></p>
                            <p><strong>Project 1: Spartiat SMS</strong>
                                <br /> Link: <a target="_blank" href="http://play.google.com/store/apps/details?id=com.spartiat_it.spartiatsms">play.google.com/store/apps/details?id=com.spartiat_it.spartiatsms</a> (Client Mobile, Java)
                                <br /> Link: <a href="http://spartiat-it.com">spartiat-it.com</a> (Server Web, PHP Laravel)
                                <br /> Link: <a href="https://sms.spartiat-it.com">sms.spartiat-it.com</a> (Client Web, ReactJS)
                            </p>
                            <p><strong>Project 2: Crudites</strong>
                                <br /> Link: <a href="https://play.google.com/store/apps/details?id=com.crudite.app" target="_blank">https://play.google.com/store/apps/details?id=com.crudite.app</a>  (Client Mobile, Java)
                                <br /> Link: <a href="http://crudites2d.com" target="_blank">http://crudites2d.com</a> (Server Web, PHP)
                            </p>
                        </div>
                    </li>
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">September - December 2018</p>
                            <h3>AfroSphinx</h3>
                            <h4>Backend/Mobile Developer (Freelance)</h4>
                            <p><strong>Douala, Cameroon</strong>
                                <br /><strong>Icebreakt</strong> is a social network with a particularity that the content published at place could be accessed only by persons at a limited distance of it. I was in charge of building and deploying backend services (NodeJs, Php, Mongo) on a CentOS server environment. </p>
                        </div>
                    </li>
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">April 2017 - September 2017</p>
                            <h3>Institut Business Intelligence (INSBI)</h3>
                            <h4>Software developer</h4>
                            <p>At <strong>INSBI</strong> my team and I worked on Hosteline as main project, Hosteline is an ecommerce marketplace for Booking Hotel services. The backend is on laravel and the client side is on Angular 5  </p>
                        </div>
                    </li>
                    <li class="timeline-event" data-aos="fade-up" data-aos-delay=".4">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">November 2015 - ...</p>
                            <h3>Talent Sportif</h3>
                            <h4>Web developer</h4>
                            <p> <strong>Yaoundé – Cameroon</strong><br />
                                <strong>Talent sportif</strong> is a sport professional social network, it's a CV-Tech built to fit the sport professionals. I have been working on this for the past years, changing technologies  as I upgraded my skill with time. It started as a Drupal project and later switched to Symfony then it was transferred a year later to Laravel (Backend) and Angular (front). Today the project is service oriented and runs 7 microservice (Python, NodeJs, Laravel) on backend and the front end is a React app.  
                                <br /> Link: <a target="blanc" href="http://talentsportif.com">Talent Sportif</a> 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- ./experience --> */}

    {/* <!-- education  --> */}
    <div class="section" id="education">
        <div class="container">
            <div class="col-md-12">
                <h4>02</h4>
                <h1 class="size-50"> Education</h1>
                <div class="h-50"></div>
            </div>
            <div class="col-md-12">
                <ul class="timeline">
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <h3>2018</h3>
                            <h3>3IL ECOLE D'INGÉNIEURS</h3>
                            <h4 style={{marginBottom: "5px"}}>Master of Science</h4>
                            <p><strong>Computer Science - Software Engineering</strong></p>
                        </div>
                    </li>
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <h3>2016</h3>
                            <h3>University of Dschang</h3>
                            <h4 style={{marginBottom: "5px"}}>Bachelor</h4>
                            <p><strong>Mathematics - Computer Science</strong></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- ./experience --> */}

    <div class="section" id="skills">
        <div class="container">
            <div class="col-md-12">
                <h4>03</h4>
                <h1 class="size-50">Skills</h1>
            </div>
            <div class="col-md-12">
                <ul class="list-inline skill-icons">
                    <li class="list-inline-item">
                        <i class="fab fa-node-js"></i>
                        <span>NodeJS</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-python"></i>
                        <span>Python</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-laravel"></i>
                        <span>Laravel</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-docker"></i>
                        <span>Docker</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-git"></i>
                        
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-jenkins"></i>
                        <span>Jenkins</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react"></i>
                        <span>ReactJS</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular"></i>
                        <span>Angular</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-android"></i>
                        <span>Android - Java</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-sass"></i>
                        <span>SCSS / CSS</span>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-js-square"></i>
                        <span>JavaScript / ES17+</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    
    {/* <!-- projects --> */}
   
    {/* <!-- ./projects --> */}
    
    {/* <!-- contact --> */}
    <div class="section" id="contact">
        <div class="container">
            <div class="col-md-12">
                <h1 class="size-50">Contact  Me</h1>
            </div>
            <div class="col-md-12" data-aos="fade-up">

                <div class="col-md-3">
                    <h3>Mobile Number</h3>
                <p>+237 698 966 719</p>
                </div>
                <div class="col-md-3">
                    <h3>Skype</h3>
                    <p>MOMO Tidjani (id:deagleshuts)</p>
                </div>
                <div class="col-md-3">
                    <h3>Email</h3>
                    <p>mty.tidjani@gmail.com </p>
                </div>

                <div class="col-md-3">
                    <h3>I am social</h3>

                <ul class="social">
                    <li><a target="blank_" href="//www.facebook.com/tidjaniyannick"><i class="ion-social-facebook"></i></a></li>
                    <li><a target="blank_" href="//twitter.com/YannickTidjani"><i class="ion-social-twitter"></i></a></li>
                    <li><a target="blank_" href="//gitlab.com/mty.tidjani"><i class="fab fa-gitlab"></i></a></li>
                    <li><a target="blank_" href="//github.com/mty-tidjani"><i class="fab fa-github"></i></a></li>
                    <li><a target="blank_" href="//github.com/mty-tidjani"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
                </div>
                
                <div class="clearfix"></div>
                <div class="h-50"></div>
                {/* <!-- <div> Shared by <i class="fa fa-love"></i><a href="https://bootstrapthemes.co">BootstrapThemes</a> </div> */}
            </div>
            {/* <!-- <div class="col-md-8" data-aos="fade-up">
                <form class="contact-bg" id="contact-form" name="contact" method="post" novalidate>
                    <input type="text" name="name" class="form-control" placeholder="Your Name" />
                    <input type="email" name="email" class="form-control" placeholder="Your E-mail" />
                    <input type="text" name="phone" class="form-control" placeholder="Phone Number" />
                    <textarea name="message" class="form-control" placeholder="Your Message" style="height:120px"></textarea>
                    <button id="submit" type="submit" name="submit" class="btn btn-glance">Send</button>
                    <div id="success">
                        <p class="green textcenter"> Your message was sent successfully! I will be in touch as soon as I can. </p>
                    </div>
                    <div id="error">
                        <p> Something went wrong, try refreshing and submitting the form again. </p>
                    </div>
                </form>
            </div> --> */}
        </div>
    </div>
    {/* // <!-- ./contact --> */}

    {/* // <!--DEMO01--> */}
    <div id="animatedModal" class="popup-modal">
        {/* <!--THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID --> */}
        <div id="btn-close-modal" class="close-animatedModal close-popup-modal"> <i class="ion-close-round"></i> </div>
        <div class="clearfix"></div>
        <div class="modal-content">
            <div class="container">
                <div class="portfolio-padding">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Geschäfts Eines<br /> Web-Studios</h2>
                        <div class="h-50"></div>
                        <p>Appropriately maintain standards compliant total linkage with cutting-edge action items. Enthusiastically create seamless synergy rather than excellent value. Quickly promote premium strategic theme areas vis-a-vis.</p>
                        <p>Appropriately maintain standards compliant total linkage with cutting-edge action items. Enthusiastically create seamless synergy rather than excellent value.</p>
                        <br />
                        <br /> <img src="img/portfolio/02.jpg" alt="" class="img-responsive" />
                        <br />
                        <br />
                        <p>Appropriately maintain standards compliant total linkage with cutting-edge action items. Enthusiastically create seamless synergy rather than excellent value. Quickly promote premium strategic theme areas vis-a-vis.</p>
                        <p>Appropriately maintain standards compliant total linkage with cutting-edge action items. Enthusiastically create seamless synergy rather than excellent value.</p>
                        <br />
                        <br /> </div>
                </div>
            </div>
        </div>
    </div>
    </>
  }
}

export default Home;
