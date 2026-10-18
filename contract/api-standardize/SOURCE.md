Pin: api-standardize e6b0dbab5599689d965bc18a71be67c809d99d0f + honk 3ae980fed extension
+ honk 0003-geodata-query-endpoint fixture addition (GET /api/v1/geodata/query,
GeodataQueryResponse/GeodataQueryEntry, from the unpushed feat/geodata-query branch)

SHA-256: 396954d95e1840bdca09d0951291ba5ff5a4468ed98174d0b6460cf0ec581f93

openapi.yaml combines api-standardize `source/openapi.yaml` at commit
e6b0dbab5599689d965bc18a71be67c809d99d0f with the unchanged
`ConfigSource.read_only_reason` extension from Glassyiris/honk `feat/native-api`,
commit 3ae980fed, `crates/honk-core/tests/fixtures/native_api_openapi.yaml`.
Only the authoritative stream_transport schema and node-list example additions were
applied to the previous vendored fixture. Afterwards the geodata query path and its
schemas were merged in from the honk 0003 patch (feat/geodata-query, unpushed).
The hash above identifies this local bundle,
not a new honk fixture commit or the contract shipped in doona beta.17.

Regenerate src/api/types.ts with `pnpm gen:api`.
