export const pagesPath = {
  "stages": {
    $url: (url?: { hash?: string }) => ({ pathname: '/stages' as const, hash: url?.hash }),
    _level: (level: string | number) => ({
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/stages/[level]/[id]' as const, query: { level, id }, hash: url?.hash })
      })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/stages' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
