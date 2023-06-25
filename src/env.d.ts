/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_ENABLE_LOGGER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
