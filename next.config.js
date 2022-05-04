module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/QDwxp7qrf2",
        permanent: true
      },
      {
        source: "/join",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdVr9SDcpX1AEwdIkIG7ERk4UE3v-da3hfZLpF637xe9RMRtg/viewform?usp=sf_link",
        permanent: true
      }
    ];
  }
};
