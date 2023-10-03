function load_all_gh_comments() {
  let buttons = Array.from(document.querySelectorAll('button'));
  let get_with_text = (text) => buttons.filter((b) => b.textContent.includes(text));
  let load_more_buttons = get_with_text("Load more");
  let nothing_loading = get_with_text("Loading…").length === 0;

  if (load_more_buttons.length === 0 && nothing_loading) { 
      console.log("done loading comments"); 
      return; 
  }
  load_more_buttons.forEach((button) => { button.click(); });
  console.log(`clicked ${load_more_buttons.length} buttons, still loading...`);
  setTimeout(load_all_gh_comments, 500);
}


function is_github_pr() {
  return (
    window.location.href.startsWith("https://github.com") &&
    window.location.href.includes("/pull/")
  );
}

function create_expandall_gh_button() {
  if (!is_github_pr()) return;
  let buttons = Array.from(document.querySelectorAll('button'));
  let get_with_text = (text) => buttons.filter((b) => b.textContent.includes(text));
  let load_more_buttons = get_with_text("Load more");

  if (load_more_buttons.length === 0) return;

  const btn = document.createElement("button");
  btn.textContent = "Load all comments";
  btn.style.position = "fixed";
  btn.style.bottom = "20px"; // Adjust the distance from the bottom as needed
  btn.style.right = "20px"; // Adjust the distance from the right as needed
  btn.style.padding = "10px 20px";
  btn.style.backgroundColor = "#007bff";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
      btn.style.opacity = "0.3";
      btn.disabled = true;
      load_all_gh_comments();
  });
  document.body.appendChild(btn);
  
}

create_expandall_gh_button();
