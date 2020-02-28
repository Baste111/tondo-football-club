export default {
  computed: {
    screenBreakPoint() {
      return this.$vuetify.breakpoint;
    },

    screenBreakPointName() {
      return this.$vuetify.breakpoint.name;
    },

    isOnMobile() {
      return this.screenBreakPointName === "xs" || this.screenBreakPointName === "sm";
    }

  },

  methods: {
    cutText(text, limit) {
      let transformedText = text;
      if (text.length > limit) {
        transformedText = `${text.slice(0, limit)}...`;
      }
      return transformedText;
    },

    isObjectHasItems(object) {
      return Object.keys(object).length <= 0;
    },

    getTeamList({age, gender}, list) {
      const filteredList = list.filter(team => team.details.category.age === age && team.details.category.gender === gender);
      return filteredList;
    },

    getSelectedCategory(categories, inNumber) {
      return categories.find((_, index) => index === inNumber);
    },

    getMatchesByCategory(items, {age, gender}) {
      let matches;
      try {
        matches = items.find(item => item.category.age === age && item.category.gender === gender).matches;
      } catch (errors) {
        matches = [];
      }
      return matches;
    },

    getTeamsByCategory(items, {age, gender}) {
      return items.find(item => item.category.age === age && item.category.gender === gender).teams;
    },

    limitsMatches(matches, limit) {
      return matches.filter((_, index) => index < limit);
    }
  }
};
