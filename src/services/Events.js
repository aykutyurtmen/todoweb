const eventStorage = {
  cnt: 0,
  ref: {}
};


const Events = {
  /**
   * Add event listener
   *
   * @param event
   * @param callback
   * @returns {string}
   */
  on: function (event, callback) {
    eventStorage.cnt++;
    const eventId = `e${eventStorage.cnt}`;
    eventStorage.ref[eventId] = {
      event, callback
    }
    return eventId;
  },

  /**
   * Clear listened event
   *
   * @param eventId
   */
  clear: function (eventId) {
    delete eventStorage.ref[eventId];
  },

  /**
   * Remove all listeners
   */
  clearAll: function () {
    eventStorage.ref = {};
  },

  /**
   * Emit event
   *
   * @param event
   * @param args
   */
  emit: function (event, ...args) {
    Object.keys(eventStorage.ref).forEach(id => {
      if (eventStorage.ref[id] && eventStorage.ref[id].event === event) {
        eventStorage.ref[id].callback(...args);
      }
    })
  }
}

export default Events
