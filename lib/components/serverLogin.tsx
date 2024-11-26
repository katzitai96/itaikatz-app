"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function signIn(formData: FormData) {
  //   "use server";
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   if (error) {
  //     return redirect("/design/sockLogin?message=Could not authenticate user");
  //   }
  return redirect("/design/loginFailed");
}
