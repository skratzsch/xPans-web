module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login', // Ziel-URL für den Redirect
          permanent: true,       // Legt fest, ob der Redirect dauerhaft ist
        },
      ];
    },
  }; 