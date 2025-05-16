export interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  description: string;
  fork: boolean;
  url: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  language: string;
}
export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface RepositoryContent {
  name: string;
  path: string;
  type: string;
}
