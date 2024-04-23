import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/logic/services"),
      },
      {
        find: "@sharing/organisms",
        replacement: path.resolve(
          __dirname,
          "src/ui/sharing/organisms/index.ts"
        ),
      },
      {
        find: "@sharing/molecules",
        replacement: path.resolve(
          __dirname,
          "src/ui/sharing/molecules/index.ts"
        ),
      },
      {
        find: "@sharing/atoms",
        replacement: path.resolve(__dirname, "src/ui/sharing/atoms/index.ts"),
      },
      {
        find: "@typing",
        replacement: path.resolve(__dirname, "src/typing"),
      },
      {
        find: "@atoms",
        replacement: path.resolve(__dirname, "src/ui/home/atoms/index.ts"),
      },
      {
        find: "@molecules",
        replacement: path.resolve(__dirname, "src/ui/home/molecules/index.ts"),
      },
      {
        find: "@organisms",
        replacement: path.resolve(__dirname, "src/ui/home/organisms/index.ts"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
      {
        find: "@icons",
        replacement: path.resolve(__dirname, "src/assets/icons"),
      },
      {
        find: "@mixins",
        replacement: path.resolve(__dirname, "src/styles/mixins.ts"),
      },
      {
        find: "@data",
        replacement: path.resolve(__dirname, "src/logic/data"),
      },
      {
        find: "@schemas",
        replacement: path.resolve(__dirname, "src/logic/schemas"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/logic/services"),
      },
      {
        find: "@handlers",
        replacement: path.resolve(__dirname, "src/logic/handlers"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/logic/utils/hooks/index.ts"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/logic/utils"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/logic/utils/constants"),
      },
      {
        find: "@functions",
        replacement: path.resolve(__dirname, "src/logic/utils/functions"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/styles"),
      },
      {
        find: "@config",
        replacement: path.resolve(__dirname, "src/logic/config.ts"),
      },
    ],
  },
});