Changed

- The DNS query tab's geosite type now reads Loyalsoldier's geosite.dat from a
  CDN in the browser instead of the backend's geodata endpoint. The file is
  downloaded once, cached locally, and revalidated in the background; results
  are no longer truncated — long listings page at 500 entries.
