"use client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AuthProvider from "@/components/auth/AuthProvider";
import SWRegProvider from "@/lib/provider/SWRegProvider";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SWRegProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <html>
              <body className="text-neutral-50 line-clamp-none bg-neutral-800">
                <div className="max-w-[480px] mx-auto bg-neutral-800 md:shadow-md min-h-screen relative">
                  <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      {children}
                    </LocalizationProvider>
                  </AppRouterCacheProvider>
                </div>
              </body>
            </html>
          </ThemeProvider>
        </StyledEngineProvider>
      </SWRegProvider>
    </AuthProvider>
  );
}
