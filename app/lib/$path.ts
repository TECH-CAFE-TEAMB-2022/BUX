export const pagesPath = {
  stages: {
    _level: (level: string | number) => ({
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({
          pathname: "/stages/[level]/[id]" as const,
          query: { level, id },
          hash: url?.hash,
        }),
      }),
      $url: (url?: { hash?: string }) => ({
        pathname: "/stages/[level]" as const,
        query: { level },
        hash: url?.hash,
      }),
    }),
  },
  $url: (url?: { hash?: string }) => ({ pathname: "/" as const, hash: url?.hash }),
};

export type PagesPath = typeof pagesPath;
