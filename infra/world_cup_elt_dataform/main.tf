resource "google_dataform_repository" "world_cup_elt_dataform_repo" {
  provider = google-beta

  project = var.project_id
  name    = var.dataform_repo_name
  region  = var.region

  service_account = var.service_account_email

  workspace_compilation_overrides {
    default_database = var.project_id
  }
  git_remote_settings {
    url            = "ssh://git@github.com/tosun-si/${var.dataform_repo_name}.git"
    default_branch = "main"
    ssh_authentication_config {
      user_private_key_secret_version = local.github_account_private_ssh_key_secret_version
      host_public_key                 = local.github_account_host_public_ssh_key_value
    }
  }
}