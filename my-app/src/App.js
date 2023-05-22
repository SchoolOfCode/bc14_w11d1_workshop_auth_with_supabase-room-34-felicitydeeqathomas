import "./App.css";

import {useState, useEffect} from "react";
import {createClient} from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://vxrwearolvgakkdknmjk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cndlYXJvbHZnYWtrZGtubWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3Njg0MzEsImV4cCI6MjAwMDM0NDQzMX0.IDSahulltE74D68t0p-VDfWZPt0PHeOxJZX3-hY3C-0"
);

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{theme: ThemeSupa}} />;
  } else {
    return <div>Logged in!</div>;
  }
}
export default App;
