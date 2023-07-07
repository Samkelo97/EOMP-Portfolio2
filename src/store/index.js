import { createStore } from 'vuex'

export default createStore({
  state: {

    testimonials:null,
    Experience:null,
    projects:null,
  },
 
  mutations: {
    settestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setExperiences: (state, Experiences) => {
      state.Experiences = Experiences;
    },
    setprojects: (state,projects) => {
      state.projects = projects;
    },
    setEducation: (state,Education) => {
      state.Education = Education;
    },
  },
  actions: {
    fetchtestimonials: async (context) => {
      fetch("https://samkelo97.github.io/data/portfolio.json")
        .then((res) => res.json())
        .then((data) => context.commit("settestimonials", data.testimonials));
    },
    fetchExperiences: async (context) => {
      fetch("https://samkelo97.github.io/data/portfolio.json")
        .then((res) => res.json())
        .then((data) => context.commit("setExperiences", data.Experiences));
    },
   
    fetchprojects: async (context) => {
      fetch(" https://samkelo97.github.io/data/portfolio.json")
        .then((res) => res.json())
        .then((data) => context.commit("setprojects", data.projects));
    },
    fetchEducation: async (context) => {
      fetch("https://samkelo97.github.io/data/portfolio.json")
        .then((res) => res.json())
        .then((data) => context.commit("setEducation", data.Education));
    },
  },

 
 
})
