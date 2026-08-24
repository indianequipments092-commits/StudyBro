# NSG BRO Live Control Foundation

M9 establishes remote announcements, feature flags, app policies and safe synchronization.

Feature rollout is deterministic: the same stable backend-assigned subject ID and flag key always produce the same cohort. The client only evaluates policy data supplied by the backend; authorization and cohort eligibility remain server-side responsibilities.