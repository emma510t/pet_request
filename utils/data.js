const myAPI =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZXphdWFlY3RhbW9nZ2xrbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0OTcyODUsImV4cCI6MjAwMDA3MzI4NX0.5CbbGAvqETjhd1_tbVm-oa-4F_JHliJV0Xuy_dG2rms";

export async function getPets() {
  let headersList = {
    apikey: myAPI,
  };

  let response = await fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/pets", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function delPet(id) {
  let headersList = {
    apikey: myAPI,
  };

  let response = await fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/pets?id=eq." + id, {
    method: "DELETE",
    headers: headersList,
  });

  /* let data = await response.json();
  console.log(data); */
}
export async function postPet() {
  let headersList = {
    apikey: myAPI,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    /*    name: "Tim",
      species: "Kat",
      isAlive: true, */
  });

  let response = await fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/pets", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}

export async function patchPet() {
  let headersList = {
    apikey: myAPI,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    /*   isAlive: true, */
  });

  let response = await fetch("https://syezauaectamogglkmvc.supabase.co/rest/v1/pets?id=eq.4", {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}
