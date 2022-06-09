// Taken from Docsy PR https://github.com/google/docsy/pull/506
// Derived from airflow-site/progressTracking.js at af462cfd227f6aaf47c6557c873d8778361ebec2 · apache/airflow-site
// https://github.com/apache/airflow-site/blob/af462cfd227f6aaf47c6557c873d8778361ebec2/landing-pages/src/js/progressTracking.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 const runProgressTracking = () => {
    const sideNavRoot = document.querySelector("#TableOfContents");
    if (!sideNavRoot) {
      return;
    }
  
    const navTocElements = Array.from(sideNavRoot.querySelectorAll("li"));
    const navItems = navTocElements.map((element) => {
      const hash = element.querySelector("a").hash;
      const target = hash.substr(1);
      let targetElement;
      if (target) {
// include a try-catch to ensure that invalid targets do not cause this to crash
// replace document.queryselector with document.getElementById (doesn't crash with leading numeric)
          try{
            targetElement = document.getElementById(target);
          }
          catch(err) {
            targetElement = document.body;
          }
      } else {
        targetElement = document.body;
      }
      return {navElement: element, targetElement};
    });

// We have removed this, so it isn't found. Remove altogether - see commented lines below
// const navbarHeight = window.document.querySelector("header > nav").offsetHeight;
  
    const handleActiveSection = () => {
      // The array should be sorted according to the position of the elements on the page
      navItems.sort((a, b) => a.targetElement.offsetTop - b.targetElement.offsetTop);
  
      let currentActiveIndex;
  
      // If the top of the window is above the first element, select the first element
      //if (navItems[0].targetElement.offsetTop + navbarHeight > window.scrollY) {
      if (navItems[0].targetElement.offsetTop > window.scrollY) {
            currentActiveIndex = 0;
      // If the top of the window is under the last element, select the last element
//      } else if (navItems[navItems.length - 1].targetElement.offsetTop + navbarHeight < window.scrollY) {
      } else if (navItems[navItems.length - 1].targetElement.offsetTop < window.scrollY) {
                currentActiveIndex = navItems.length - 1;
      } else {
        // Try to determine the best element
//        currentActiveIndex = navItems.findIndex((item) => item.targetElement.offsetTop + navbarHeight > window.scrollY) - 1;
        currentActiveIndex = navItems.findIndex((item) => item.targetElement.offsetTop > window.scrollY) - 1;
      }
// MvM: Change classlist to use our activeToc rather than 'current' specified in Docsy PR
      navItems.forEach((item) => item.navElement.classList.remove('activeToc'));
      navItems[currentActiveIndex].navElement.classList.add('activeToc');
    };
  
    window.addEventListener("scroll", throttle(handleActiveSection, 10));
    window.addEventListener("resize", throttle(handleActiveSection, 10));
    handleActiveSection();
  };
  runProgressTracking();
  