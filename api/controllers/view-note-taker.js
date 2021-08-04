module.exports = {


    friendlyName: 'View note-taker',
  
  
    description: 'Display "Note-Taker" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/note-taker'
      }
  
    },
  
  
    fn: async function () {
  
      // Respond with view.
      return {};
  
    }
  
  
  };
  