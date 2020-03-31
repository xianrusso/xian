%{
  site_name: "xian.codes",
  site_description: "xian's site",
  date_format: "{WDfull}, {D} {Mshort} {YYYY}",
  base_url: "/",
  author: "xian",
  author_email: "iamchristianrusso@gmail.com",
  plugins: [
    {Serum.Plugins.LiveReloader, only: :dev}
  ]
}
