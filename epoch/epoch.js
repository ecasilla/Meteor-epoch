Package.describe({
  summary: "Epoch a real time Charting library using Jquery and d3"
});

Package.on_use(function (api,where) {
  api.use('Epoch','client')
  api.use('jquery', 'client');
  api.use('d3', 'client');
  api.add_files('epoch.0.5.2.min.css', ['client']);
  api.add_files('epoch.0.5.2.min.js', ['client']);
});


