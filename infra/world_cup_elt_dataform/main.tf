data "google_secret_manager_secret_version" "github_public_ssh_key" {
  project = var.project_id
  secret  = local.github_account_public_ssh_key_secret_name
}

data "google_secret_manager_secret_version" "github_private_ssh_key" {
  project = var.project_id
  secret  = local.github_account_private_ssh_key_secret_name
}

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
      user_private_key_secret_version = data.google_secret_manager_secret_version.github_private_ssh_key.secret_data
      host_public_key                 = data.google_secret_manager_secret_version.github_public_ssh_key.secret_data
    }
  }
}