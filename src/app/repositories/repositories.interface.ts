export interface Repository {
  name: string;
  owner: Owner;
  fork: boolean;
}

export interface Owner {
  login: string;
}

export interface Commit {
  sha: string;
}

export interface Branch {
  name: string;
  commit: Commit;
}
