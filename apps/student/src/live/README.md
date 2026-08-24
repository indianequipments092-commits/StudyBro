# NSG BRO Live Control Foundation

M9 establishes remote announcements, feature flags, app policies and safe synchronization.

Remote policy helpers cover maintenance, minimum-version blocking, force-update, login and download controls. Feature rollout is deterministic: the same stable backend-assigned subject ID and flag key always produce the same cohort.

Remote configuration is untrusted input; server-side authorization and policy enforcement remain mandatory.