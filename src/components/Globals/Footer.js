import React from "react";

const Footer = () => (
    <div className = "site-footer">
        <div class="container">
        <div class="columns is-mobile is-multiline">
        <div class="column is-haf-mobile is-one-quarter-desktop">
            <h6 class="title is-5">Quick links</h6>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <div class="column is-haf-mobile is-one-quarter-desktop">
            <h6 class="title is-5">Information</h6>
            <ul>
            <li><a href="#0">Legal Information</a></li>
            <li><a href="#0">Job oppurtunities</a></li>
            <li><a href="#0">Frequently asked Questions</a></li>
            </ul>
            </div>
            <div class="column is-haf-mobile is-one-quarter-desktop">
            <h6 class="title is-5">Follow Us</h6>
            <ul>
            <li><a href="#0"><i class="fab fa-fw fa-Facebook"></i>Facebbok</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-Instagram"></i>Instagram</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-LinkedIn"></i>LinkedIn</a></li>
            <li><a href="#0"><i class="fab fa-fw fa-Youtube"></i>Youtube</a></li>
            </ul>
            </div>
            <div class="column is-haf-mobile is-one-quarter-desktop">
            <h6 class="title is-5">Our Address</h6>
            <li><a href="#0"> Deakin University, Building BC, Level 7, A2I2</a></li>
            <i class="fas fa-fw fa-phone"></i>
            <a href="tel:+1234567">(619) 234-0000</a>
            </div>
        </div>
        <p class="has-text-centered">&copy; surround.com | Designed by Deakin Students</p></div>
    </div>

)

export default Footer
