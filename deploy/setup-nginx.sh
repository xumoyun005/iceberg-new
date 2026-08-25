#!/bin/bash
set -euo pipefail

SITE_CONF="/etc/nginx/sites-available/icebergbtl.uz"
SRC_CONF="/home/ubuntu/iceberg-site/deploy/nginx-icebergbtl.uz.conf"

cp "$SRC_CONF" "$SITE_CONF"
ln -sfn "$SITE_CONF" /etc/nginx/sites-enabled/icebergbtl.uz
nginx -t
systemctl reload nginx

if command -v certbot >/dev/null 2>&1; then
  certbot --nginx -d icebergbtl.uz -d www.icebergbtl.uz --non-interactive --agree-tos --redirect --register-unsafely-without-email || true
fi
