import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@services",
        replacement: path.resolve(process.cwd(), "src/logic/services"),
      },
      {
        find: "@sharing/organisms",
        replacement: path.resolve(
          process.cwd(),
          "src/ui/sharing/organisms/index.ts"
        ),
      },
      {
        find: "@sharing/molecules",
        replacement: path.resolve(
          process.cwd(),
          "src/ui/sharing/molecules/index.ts"
        ),
      },
      {
        find: "@sharing/atoms",
        replacement: path.resolve(
          process.cwd(),
          "src/ui/sharing/atoms/index.ts"
        ),
      },
      {
        find: "@typing",
        replacement: path.resolve(process.cwd(), "src/typing"),
      },
      {
        find: "@atoms",
        replacement: path.resolve(process.cwd(), "src/ui/home/atoms/index.ts"),
      },
      {
        find: "@molecules",
        replacement: path.resolve(
          process.cwd(),
          "src/ui/home/molecules/index.ts"
        ),
      },
      {
        find: "@organisms",
        replacement: path.resolve(
          process.cwd(),
          "src/ui/home/organisms/index.ts"
        ),
      },
      {
        find: "@images",
        replacement: path.resolve(process.cwd(), "src/assets/images"),
      },
      {
        find: "@icons",
        replacement: path.resolve(process.cwd(), "src/assets/icons"),
      },
      {
        find: "@mixins",
        replacement: path.resolve(process.cwd(), "src/styles/mixins.ts"),
      },
      {
        find: "@data",
        replacement: path.resolve(process.cwd(), "src/logic/data"),
      },
      {
        find: "@schemas",
        replacement: path.resolve(process.cwd(), "src/logic/schemas"),
      },
      {
        find: "@services",
        replacement: path.resolve(process.cwd(), "src/logic/services"),
      },
      {
        find: "@handlers",
        replacement: path.resolve(process.cwd(), "src/logic/handlers"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(
          process.cwd(),
          "src/logic/utils/hooks/index.ts"
        ),
      },
      {
        find: "@utils",
        replacement: path.resolve(process.cwd(), "src/logic/utils"),
      },
      {
        find: "@constants",
        replacement: path.resolve(process.cwd(), "src/logic/utils/constants"),
      },
      {
        find: "@functions",
        replacement: path.resolve(process.cwd(), "src/logic/utils/functions"),
      },
      {
        find: "@styles",
        replacement: path.resolve(process.cwd(), "src/styles"),
      },
      {
        find: "@config",
        replacement: path.resolve(process.cwd(), "src/logic/config.ts"),
      },
    ],
  },
});
