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

load_all_gh_comments();
