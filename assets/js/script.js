/**
 * Semear Fitness - Main Script
 * @description Handles mobile menu, radio player, and scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // Mobile Menu
  // ==========================================
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ==========================================
  // Radio Player
  // ==========================================
  const radio = document.getElementById('radioAudio');
  const btnPlay = document.getElementById('btnPlay');
  const radioVol = document.getElementById('radioVol');

  if (radio && btnPlay && radioVol) {
    radio.volume = radioVol.value;

    btnPlay.addEventListener('click', () => {
      if (radio.paused) {
        radio.play();
        btnPlay.textContent = '⏸';
      } else {
        radio.pause();
        btnPlay.textContent = '▶';
      }
    });

    radioVol.addEventListener('input', () => {
      radio.volume = radioVol.value;
    });
  }

  // ==========================================
  // Scroll Reveal Animation (IntersectionObserver)
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.reveal, #img-planos');
  elementsToAnimate.forEach(el => observer.observe(el));
});
