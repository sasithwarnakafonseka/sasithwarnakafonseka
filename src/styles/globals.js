import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  .text-my-bio p{
    margin-bottom: 35px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .lottie-session{
    margin-left:150px;
  }
  .tectstack a img{
    margin: 3px;
  }

  .about-text{
    margin-top: 80px;
  }
  
.custom-btn {
  background: #eee;
  color: #5b5b5b;
  font-weight: bold;
  border-radius: 50px;
  padding: 13px 29px;
  font-size: 14px;
  margin-right: 15px;
  line-height: normal;
  overflow: hidden;
  transition: all 0.4s ease;
}
.custom-btn:hover {
  color: #ffc200;
}
.custom-btn.custom-btn-bg {
  background: #474559;
  color: #ffffff;
}
.custom-btn.custom-btn-bg:hover {
  background: #ffc200;
  color: #ffffff !important;
}

.animated {
  position: relative;
}

.animated-info {
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  min-width: 260px;
  position: relative;
}

.animated-item {
  color: #ffc200;
}

.animated-item {
  font-size: 28px;
  line-height: inherit;
  display: block;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  animation: BottomTotop 6s linear infinite 0s;
}
.animated-item:nth-child(2n+2) {
  animation-delay: 2s;
}
.animated-item:nth-child(3n+3) {
  animation-delay: 4s;
}

@keyframes BottomTotop {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(5px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    transform: translateY(5px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999999;
  will-change: transform;
  transition: transform 200ms linear;
}
.navbar[class*="-unpinned"] {
  transform: translate(0, -150%);
}
.navbar[class*="-pinned"] {
  transform: translate(0, 0);
}
.navbar[class*="headroom--not-top"] {
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding-top: 0;
  padding-bottom: 0;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-expand-sm .navbar-nav .nav-link {
  padding: 0 20px;
}

.nav-link {
  font-weight: bold;
  font-size: 16px;
  overflow: hidden;
}
.nav-link span {
  position: relative;
  display: inline-block;
  transition: transform 0.3s;
}
.nav-link span:before {
  position: absolute;
  top: 100%;
  content: attr(data-hover);
  transform: translate3d(0, 0, 0);
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #ffc200;
  font-weight: bold;
}
.navbar-light .navbar-nav .nav-link:focus span,
.navbar-light .navbar-nav .nav-link:hover span {
  transform: translateY(-100%);
}

.navbar-light .navbar-toggler-icon {
  background: none;
}

.navbar-toggler {
  border: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
}
.navbar-toggler:focus {
  outline: none;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:first-child {
  transform: rotate(45deg);
  top: 6px;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:nth-child(2) {
  display: none;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:last-child {
  transform: rotate(-45deg);
  bottom: 1px;
}
.navbar-toggler .navbar-toggler-icon {
  background: #212121;
  display: block;
  width: 100%;
  height: 2px;
  margin: 5px 0;
  transition: all 0.4s ease;
  position: relative;
}

.copyright-text {
  font-size: 16px;
  font-weight: normal;
  display: block;
}

.color-mode {
  font-weight: bold;
  cursor: pointer;
}

.color-mode-icon {
  position: relative;
  right: 6px;
}
.color-mode-icon:after {
  font-family: 'unicons';
  content: '\ea9f';
  font-size: 30px;
  font-weight: 300;
  font-style: normal;
}
.color-mode-icon.active:after {
  font-family: 'unicons';
  content: '\eb65';
  font-size: 30px;
  color: #ffffff;
}

.dark-mode {
  background: #0c0c0d;
}
.dark-mode .navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.8);
}
.dark-mode .navbar-light .navbar-nav .nav-link:hover {
  color: #ffc200;
}
.dark-mode .navbar[class*="headroom--not-top"] {
  background: #0c0c0d;
  border-bottom: 1px solid #1f1f1f;
}
.dark-mode .small-text {
  background: #0d0c15;
  color: #ffffff;
}
.dark-mode .feature-card .uil,
.dark-mode .navbar-light .navbar-brand,
.dark-mode h1, .dark-mode h2, .dark-mode h3, .dark-mode h4, .dark-mode h5, .dark-mode h6,
.dark-mode .color-mode {
  color: #ffffff;
}
.dark-mode .owl-carousel .owl-nav button.owl-next,
.dark-mode .owl-carousel .owl-nav button.owl-prev,
.dark-mode .owl-carousel button.owl-dot {
  color: #ffffff;
}

.timeline-wrapper {
  position: relative;
  padding: 22px 0;
}
.timeline-wrapper:last-child:before {
  height: 0;
}
.timeline-wrapper:before {
  content: "";
  background: #474559;
  width: 3px;
  height: 100%;
  position: absolute;
  left: 38px;
}

.timeline-yr {
  background: #474559;
  border-radius: 100%;
  position: absolute;
  width: 75px;
  height: 75px;
  line-height: 75px;
  text-align: center;
}
.timeline-yr span {
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  display: block;
  line-height: 75px;
}

.timeline-info {
  display: inline-block;
  vertical-align: top;
  max-width: 432px;
  margin-left: 6em;
}
.timeline-info small {
  color: #474559;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}

.owl-carousel .owl-nav span {
  display: none;
}
.owl-carousel .owl-nav .owl-prev:before,
.owl-carousel .owl-nav .owl-next:before {
  background: none;
  padding: 0;
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-family: 'unicons';
  font-size: 100px;
  line-height: normal;
}
.owl-carousel .owl-nav .owl-prev:before {
  content: '\e833';
  left: -45px;
}
.owl-carousel .owl-nav .owl-next:before {
  content: '\e836';
  right: -45px;
}

.owl-theme .owl-nav [class*=owl-] {
  background: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
}
.owl-theme .owl-nav [class*=owl-]:hover {
  color: #ffc200;
}
.owl-theme .owl-dots .owl-dot {
  outline: none;
}
.owl-theme .owl-dots .owl-dot span {
  width: 8px;
  height: 8px;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
  background: #5b5b5b;
}

.google-map iframe {
  width: 100%;
}

.contact-form {
  position: relative;
}
.contact-form .form-control {
  background: transparent;
  border-radius: 2px;
  outline: none;
  box-shadow: none;
  font-weight: bold;
  margin: 16px 0;
}
.contact-form .form-control:not(textarea) {
  height: 48px;
}
.contact-form .form-control:hover, .contact-form .form-control:focus {
  border-color: #ffc200;
}
.contact-form .submit-btn {
  background: #ffc200;
  border-radius: 50px;
  color: #ffffff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
.contact-form .submit-btn:hover {
  background: #474559;
}

.contact-info {
  background: #474559;
  border-radius: 0 0 3px 3px;
  position: relative;
  bottom: 8px;
}
.contact-info p, .contact-info a {
  color: #f7f3f3;
}

.social-links .uil {
  color: #f7f3f3;
  font-size: 20px;
  display: block;
  margin: 5px 0;
}
.social-links .uil:hover {
  color: #ffc200;
}

@media (min-width: 1270px) {
  .owl-theme .owl-dots {
    position: relative;
    bottom: 50px;
  }
}
@media (max-width: 991px) {
  .full-screen {
    padding-bottom: 4rem;
  }

  .color-mode {
    display: none;
  }

  .about-image {
    margin-top: 4em;
  }

  .mobile-mt-2,
  .contact-form {
    margin-top: 2em;
  }

  .contact-info {
    padding: 0 2rem;
  }
}
@media (max-width: 767px) {
  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 2em;
  }

  .animated-item {
    font-size: 28px;
  }

  .navbar-collapse {
    background: #ffffff;
    text-align: center;
    padding-bottom: 20px;
  }

  .navbar-expand-sm .navbar-nav .nav-link {
    padding: 3px 20px;
  }
}
@media (max-width: 580px) {
	.animated-info {
		min-width: 200px;
	}
  .animated-item {
    font-size: 30px;
  }

  .custom-btn-group {
    text-align: center;
  }

  .custom-btn {
    display: block;
    margin: 10px 0;
  }

  .owl-theme .owl-nav {
    display: none;
  }

  .timeline-info small {
    display: block;
    margin: 10px 0 0 0;
  }
}
@media (max-width: 320px) {
  .animated-text {
    margin-top: 0;
  }

  .about-text {
    text-align: center;
  }

  .full-screen {
    padding: 4rem 0;
  }

  
`;

export default GlobalStyles;