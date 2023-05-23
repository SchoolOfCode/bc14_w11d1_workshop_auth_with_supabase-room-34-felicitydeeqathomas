import "./App.css";

import {useState, useEffect} from "react";
import {createClient} from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://vxrwearolvgakkdknmjk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4cndlYXJvbHZnYWtrZGtubWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NDEzODAsImV4cCI6MjAwMDQxNzM4MH0.BQIDT8uuSQanuJV6q-CeP1LdWZ_D_MQlZfxvXzfYCCo",
  {
    headers: {
      Authorization:
        "Bearer 2LVJJYNlbQbNhDcWOoMedTTMADlktpDakfS8J3cam1fnIUBJCzJQfVj3iFaInOI6QNTbpXSBtwwzeOrsHZtNxA==",
    },
  }
);

function App() {
  const [session, setSession] = useState(null);


  async function handleClick() {
   let  { data, error } = await supabase.from('leaderboard').insert({ name: 'Stacy', score: 99999 })
  console.log(data, error)
  }


  async function handleRead () { 
    
    let { data, error } = await supabase
  .from('leaderboard')
  .select('name, score')
  .order('score', { ascending: false })

  console.log(data, error)

}

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
    return (
      <div>
        Logged in!
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>;
        <button onClick={handleClick}>InsertIntoTable</button>;
        <button onClick={handleRead}>ReadFromTable</button>;
      </div>
    );
  }
}
export default App;
