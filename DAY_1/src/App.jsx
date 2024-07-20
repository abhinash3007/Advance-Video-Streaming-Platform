
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainComponent from './components/MainComponent'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      }, {
        path: "watch",
        element: <WatchPage />,
      }
    ]
  }
])
function App() {

  return (
    <>
      <Provider store={store}>
        <Head></Head>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App
