import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className="container-fluid hero-container">
              <div className="hero-body no-padding">
                  <div className="container-fluid  no-margin no-padding">
                      <img className="img-fluid hero" alt="Hero" src="../../../assets/img/pretty-woman-1509956_1920.jpg" />
                  </div>
              </div>
          </div>
          <div className="container-fluid">
              <div className="centerAlign">
                  <div className="card">
                      <div className="card-image">
                          <img src="../assets/img/nutrit.png" alt="nutrition" />
                      </div>
                      <div className="card-content">
                          <div className="content">
                            <div className="card-title-img">
                                <img alt="Nutritional Guidance" className="nutrition-card-img" src="../assets/img/Nutritionalguidance.png" />
                            </div>
                              <p className="card-text padding-10">Dieting is different for many, and not meant to be hard. Discover the best method to enjoy your favorite foods and still improve your health and weight. Learn the dynamics of macronutrient and micronutrient tracking or how to intuitively
                                  eat. Free yourself from binge eating.</p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-image">
                          <img src="../assets/img/fit.png" className="dumbbellImgCard" alt="workout plans" />
                      </div>
                      <div className="card-content">
                          <div className="content">
                          <div className="card-title-img">
                              <img alt="Workout Plans" className="workout-card-img" src="../assets/img/workouttitle.png" />
                          </div>
                              <p className="card-text padding-10">Offering both customized and printable workout plans (implemented in eBooks). There is no cookie cutter program in the customizable option. I listen to you, your struggles, your lifestyle &amp; goals, and what you desire most.
                                  This is what you need to conquer the idea that every body is designed the same. You are meant to thrive. </p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-image">
                            <img src="../assets/img/love.png" alt="Love" />
                      </div>
                      <div className="card-content">
                          <div className="content">
                          <div className="card-title-img">
                              <img alt="Changing Your Mindset" className="mind-card-img" src="../assets/img/mindsettitle.png" />
                          </div>
                              <p className="card-text padding-10">When you take care of yourself, you realize just how strong you can become. You are limitless. It is time for you to change your perspective and reach those goals. Put yourself first and lose the idea that you are not able to win.
                                  Why not you? </p>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-image">
                          <img src="../assets/img/coachin.png" alt="Coachin" />
                      </div>
                      <div className="card-content">
                          <div className="content">
                          <div className="card-title-img">
                              <img alt="One on One Coaching" className="coach-card-img" src="../assets/img/oneononetitle.png" />
                          </div>
                              <p className="card-text padding-10">Receive guidance and support each week, along with bi-weekly video coaching calls. Let me guide you step by step to define your goals, find your motivation, and create lifelong habits. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid about">
              <div className="row height-100 padding-3-percent">
                  <div className="col-md-7 mx-auto">
                      <img className="aboutSecHey" src="../assets/img/heyGorgeous.png" alt="Hey Gorgeous" />
                      <p className="about-sec">I&#39;m Tiffany</p>
                      <p className="about-content">
                          Health is more than about perfectly carved abs, eating endless salads, and shooting ACV. I believe in creating unique and easy ways to become healthy, decrease stress, and improve self-care. I want you to break free from dieting standards that cause mental
                          and physical stress and learn strategies to overcome self-sabotage. I am passionate about teaching you healthy methods on nutrition, fitness, and overall teaching you to become a badass, self-loving, confident woman.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
