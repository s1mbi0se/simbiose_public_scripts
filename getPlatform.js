const platform = getPlatform()
components['fantasy_management_packs'].setTableFetch(async () => await executeAction('query-select-operation-system-id', null, {platform: platform}))
components['fantasy_management_packs'].reload()

