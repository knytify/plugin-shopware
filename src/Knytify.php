<?php declare(strict_types=1);

namespace Knytify;

use Shopware\Core\Framework\Plugin;

class Knytify extends Plugin
{
    public function getMySetting(): string
    {
        return $this->systemConfigService->get('Knytify.config.secret');
    }
}
