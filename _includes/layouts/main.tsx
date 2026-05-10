export default function ({ title, children, url }: Lume.Data, _helpers: Lume.Helpers) {
  const year = new Date().getFullYear();
  const menus: string[] = [
    "Members",
    "Publications",
    "Apply",
  ];
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <title>ELLab - {title}</title>
      </head>
      <body class="touch-pan-y">
        <nav class="bg-white border-b border-gray-200">
          <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <a href="/" class="flex items-center space-x-3">
              <span class="self-center text-2xl text-green-800 font-semibold whitespace-nowrap">ELLab @ SKKU</span>
            </a>
            <button id="navbar-toggle" type="button" class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar">
              <ul class="font-medium flex flex-col mt-2 md:mt-0 md:p-0 md:flex-row md:space-x-1">
                {menus.map((menu) => (
                  <li>
                    <a href={"/" + menu.toLowerCase()} class={`block py-1 px-3 ${url.startsWith("/" + menu.toLowerCase()) ? "text-green-800" : "text-gray-900"} p-0`}>{menu}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <main class="max-w-screen-lg container mx-auto p-4 my-2">
          <div class="flex flex-col space-y-5">
            {children}
          </div>
        </main>
        <footer class="bg-white border-t border-gray-200 py-2 text-center text-sm text-gray-600">
          &copy; {year} Efficient Learning Lab. All rights reserved.
        </footer>
        <script type="text/javascript" src="/scripts.js" />
      </body>
    </html>
  );
}
