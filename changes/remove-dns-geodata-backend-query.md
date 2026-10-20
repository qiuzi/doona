Removed

- The backend's geosite content query (`GET /api/v1/geodata/query`) is gone
  from doona: the DNS query tab's geosite type is now answered from the
  browser-side Loyalsoldier data, so the API method, its contract entries and
  the mock's fixture were removed. The results view and its types moved to the
  CDN query module unchanged.
