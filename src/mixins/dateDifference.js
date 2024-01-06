export default {
  methods: {
    getDateDifference(date, number = 1) {
      const currentDate = new Date();
      const previousDate = new Date(date);
      const timeDifference = currentDate.getTime() - previousDate.getTime();
      const daysDifference = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24 * number)
      );
      return daysDifference;
    },
  },
};
