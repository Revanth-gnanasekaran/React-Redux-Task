const RootLayout = () => {
    return (
      <>
        <Provider store={store}>
          <NavBar />
          <main>
            <Outlet />
          </main>
        </Provider>
      </>
    );
  };
  
  export default RootLayout;