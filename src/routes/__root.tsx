import { TanStackDevtools } from '@tanstack/react-devtools'
import type { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Crosshair from "#/components/Crosshair";
import Navbar from '#/components/Navbar'
import {ClerkProvider} from '@clerk/tanstack-react-start'
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import appCss from '../styles.css?url'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: ' AgentMart - he Registry for Agentic Intelligence',
      },{
        name: 'description',
        content: 'AgentMart is a registry for agentic intelligence, providing a platform for developers to share and discover intelligent agents. Our mission is to foster collaboration and innovation in the field of artificial intelligence by creating a centralized hub for agentic intelligence resources.',
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere">
        <ClerkProvider>

          <div id="root-layout">
            <header>
              <div className="frame">
                <Navbar/>
                <Crosshair/>
                <Crosshair/>

              </div>
            </header>

            <main>
               <div className="frame">
                {children}
              </div>
            </main>

          </div>

          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ClerkProvider>
        <Scripts />
      </body>
    </html>
  )
}
