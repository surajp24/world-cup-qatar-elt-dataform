variable "project_id" {
  type = string
}

variable "region" {
  description = "Location for load balancer and Cloud Run resources"
  default     = "europe-west1"
}

variable "dataform_repo_name" {
  description = "Dataform repo name."
  type        = string
}

variable "service_account_email" {
  description = "Service Account email for the creation of the Dataform repo."
  type        = string
}
