// main.js

import "@babel/polyfill";
// import Vue
import Vue from "vue";
import LazyLoad from "vanilla-lazyload";
import { createClient } from "contentful";

// import contentful
const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
});

// import Markdown-It
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

let lazyLoader = new LazyLoad({
  elements_selector: [".lazy", "iframe"]
});

lazyLoader.update();

// new Vue instance
let vm = new Vue({
  el: "#app",
  data: {
    site: [],
    aboutMain: [],
    aboutFull: [],
    testimonies: [],
    pdf: [],
    imgLoad: false,
    loading: false,
    images: [],
    videos: [],
    selected: null
  },
  methods: {
    getSite: function() {
      this.loading = true;
      client.getEntry("1560CDpGBGu6QuIm2ySEgO").then(entry => {
        this.loading = false;
        this.site = entry.fields;
        // Handle markdown from contentful
        this.aboutMain = md.render(entry.fields.aboutMain);
        this.aboutFull = md.render(entry.fields.aboutFull);
        // Return rendered markdown portions from entry
        return {
          aboutMain: this.aboutMain,
          aboutFull: this.abouFull
        };
      });
    },

    getTestimonies: function() {
      this.loading = true;
      client
        .getEntries({
          content_type: "testimony",
          select: ["sys.id,fields.testimonyAuthor"]
        })
        .then(entries => {
          this.loading = false;
          this.testimonies = entries.items;
        })
        .catch(console.error);
    },
    getPdf: function() {
      this.loading = true;
      client
        .getAsset("33EtIMhkWkaUUEGusMQqQQ")
        .then(resume => {
          this.pdf = resume.fields.file;
          this.loading = false;
        })
        .catch(console.error);
    },
    getVideos: function() {
      this.loading = true;
      client
        .getEntries({
          content_type: "video"
        })
        .then(video => {
          this.loading = false;
          this.videos = video.items;
        })
        .catch(console.error);
    },
    getGallery: function() {
      this.loading = true;

      client
        .getEntries({
          content_type: "imageGallery"
        })
        .then(response => {
          this.loading = false;
          this.images = response.items[0].fields.imagesForGallery;
        })
        .catch(console.error);
    },
    selectedImage: function() {
      this.selected = event.target.src;
    }
  },
  created() {
    this.getSite();
    this.getTestimonies();
    this.getPdf();
  }
});
